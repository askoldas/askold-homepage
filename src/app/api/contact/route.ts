import { createHash } from "node:crypto";
import { Resend } from "resend";
import { contactLimits, isContactEmail, parseContactInquiry } from "@/lib/contact";

export const runtime = "nodejs";
const failure = "Something went wrong. Please try again.";
const bodyTooLarge = Symbol("bodyTooLarge");
const respond = (status: number) => Response.json({ error: failure }, { status, headers: { "Cache-Control": "no-store" } });

async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("body");
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > contactLimits.bodyBytes) { await reader.cancel(); return bodyTooLarge; }
      chunks.push(value);
    }
    return JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(Buffer.concat(chunks))) as unknown;
  } finally { reader.releaseLock(); }
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get("sec-fetch-site")?.toLowerCase() === "cross-site") return respond(403);
  if (request.headers.get("content-type")?.split(";")[0].trim().toLowerCase() !== "application/json") return respond(415);
  const length = request.headers.get("content-length");
  if (length && !/^\d+$/.test(length)) return respond(400);
  if (length && Number(length) > contactLimits.bodyBytes) {
    await request.body?.cancel().catch(() => {});
    return respond(413);
  }
  let body: unknown;
  try { body = await readBody(request); } catch { return respond(400); }
  if (body === bodyTooLarge) return respond(413);
  const inquiry = parseContactInquiry(body);
  if (!inquiry) return respond(400);
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();
  const fromAddress = from?.match(/<([^<>]+)>$/)?.[1] ?? from;
  if (!key || !from || /[\r\n]/.test(from) || !fromAddress || !isContactEmail(fromAddress) || !to || !isContactEmail(to)) return respond(503);
  const { submissionId, ...fields } = inquiry;
  const hash = createHash("sha256").update(JSON.stringify(fields)).digest("hex");
  try {
    const resend = new Resend(key);
    const { data, error } = await resend.emails.send({
      from, to, replyTo: inquiry.email, subject: "New project inquiry",
      text: `Name: ${inquiry.name}\nEmail: ${inquiry.email}\n\nMessage:\n${inquiry.message}`,
    }, { idempotencyKey: `contact/${submissionId}/${hash}` });
    if (error || typeof data?.id !== "string" || !data.id.trim()) return respond(502);
    return Response.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  } catch { return respond(502); }
}

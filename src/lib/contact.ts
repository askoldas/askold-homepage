export const contactLimits = { name: 100, email: 254, message: 3000, bodyBytes: 16 * 1024 } as const;

export interface ContactInquiry {
  name: string;
  email: string;
  message: string;
  submissionId: string;
}

export function isContactEmail(value: string) {
  if (value.length > contactLimits.email || /[\s<>\u0000-\u001f\u007f-\u009f]/u.test(value)) return false;
  const parts = value.split("@");
  if (parts.length !== 2 || parts[0].length > 64 || !/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/i.test(parts[0])) return false;
  const domain = parts[1].split(".");
  return domain.length >= 2 && domain.every(label => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(label));
}

export function parseContactInquiry(value: unknown): ContactInquiry | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const fields = value as Record<string, unknown>;
  const allowed = ["name", "email", "message", "website", "submissionId"];
  if (Object.keys(fields).some(key => !allowed.includes(key)) || allowed.some(key => typeof fields[key] !== "string")) return null;
  if ((fields.name as string).length > contactLimits.name || (fields.email as string).length > contactLimits.email || (fields.message as string).length > contactLimits.message) return null;
  const name = (fields.name as string).trim();
  const email = (fields.email as string).trim();
  const message = (fields.message as string).replace(/\r\n?/g, "\n").trim();
  const submissionId = fields.submissionId as string;
  if (fields.website !== "" || !name || name.length > contactLimits.name || /[\u0000-\u001f\u007f-\u009f]/u.test(fields.name as string)) return null;
  if (!isContactEmail(email) || /[\u0000-\u001f\u007f-\u009f]/u.test(fields.email as string)) return null;
  if (!message || message.length > contactLimits.message || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f-\u009f]/u.test(fields.message as string)) return null;
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionId)) return null;
  return { name, email, message, submissionId: submissionId.toLowerCase() };
}

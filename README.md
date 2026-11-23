# Askold website

Next.js App Router foundation for Askold Makrikov's independent web design and development website.

## Local development

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

Commit the generated `package-lock.json` to pin dependency versions. Fonts are served locally through Fontsource packages, which include their license files.

## Milestone 3 boundary

The homepage contains the preserved sculpture/bonsai hero followed by business value, featured iLab work, additional projects, six services, collaboration principles, process, about and contact. The hero uses its approved local sticky scroll scene and original media; reduced motion uses a matching still without loading the video.

Routes: `/`, `/work`, `/services`, `/contact` and `/work/{ilab,frio-estrella,latvir,fixmobile,seoquill}`. Project content is maintained in `src/content/projects.ts`, services in `src/content/services.ts`. Real public project captures and original portfolio media are documented in `docs/ASSET_MANIFEST.md`.

Milestone 3 uses TypeScript, lint, production build and targeted development checks only. The full visual/accessibility/performance review belongs to Milestone 4. Earlier hero review records remain in `docs/QA_REPORT.md`.

English is active. Latvian and Russian are planned; no language selector or translated routes are exposed.

Project results are optional and require dated source evidence, a metric definition, units and publication approval. No sample metrics are published. The full-screen gold Contact modal sends inquiries through server-side `POST /api/contact` using Resend. Its direct email, phone, WhatsApp and Telegram links remain available. Analytics collection remains disabled.

## Contact delivery configuration

Copy `.env.example` to `.env.local` and supply `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a sender on the verified domain) and `CONTACT_TO_EMAIL` (the receiving inbox). `.env.local` is ignored by Git; never commit credentials or prefix these names with `NEXT_PUBLIC_`. Restart the local server after changing environment values. Configure the same variables separately in the intended Vercel project environment before deployment; local values are not uploaded automatically. This implementation does not change hosting or DNS.

The endpoint validates fields, limits request bytes and uses a honeypot. Duplicate retries use Resend idempotency; basic spam checks are not a distributed rate limiter. A success response means Resend accepted the send, not independently verified inbox delivery. No-JavaScript visitors can use the direct email link.

Metadata, canonicals, social previews, JSON-LD, sitemap and robots are implemented. `SITE_INDEXABLE` defaults to false: robots disallows crawling and page metadata uses noindex/nofollow. Enabling it with `SITE_INDEXABLE=true` is a build-time release decision for Milestone 4, not authorization to deploy. Canonical URLs use the intended `https://askold.me` origin; no hosting or DNS was changed.

The reference repository is read only. Do not change production hosting or DNS.

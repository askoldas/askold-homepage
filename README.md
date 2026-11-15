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

## Milestone 1 boundary

The root page is a restrained typography and spacing foundation. The signature sculpture/bonsai animation, navigation, homepage sections, portfolio routes, case studies, and contact integration belong to later milestones.

English is active. Latvian and Russian are planned; no language selector or translated routes are exposed.

Project results are optional and require dated source evidence, a metric definition, units, and publication approval. No analytics or client metrics are assumed. The existing public email, `makrikovas@gmail.com`, is sourced from the reference repository's `ContactSection.tsx`. Contact uses a native mailto link; there is no delivery backend.

Robots metadata deliberately disables indexing and following during development. Release preparation must explicitly review this setting and establish production URL metadata.

The reference repository is read only. Do not change production hosting or DNS.

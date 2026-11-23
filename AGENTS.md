# ASKOLD — Project Instructions

## Project purpose

Build a premium, commercially focused website for Askold Makrikov, an independent web designer and developer.

The new website must combine exceptional creative design with credible evidence of real business results.

Primary goal: attract paying clients for web design, custom development, e-commerce, SEO and ongoing optimization.

## Repository boundaries

WRITE:
./
GitHub: askoldas/askold-homepage

READ ONLY:
../askold-cv-reference/
GitHub: askoldas/Cv

Never modify, commit, push, delete or reconfigure the reference repository.

Copy required assets into the new repository without changing their originals.

Never change askold.me DNS, hosting or production deployment without explicit approval.

Never commit secrets or confidential client data.

## Agent coordination

The primary Codex session is the ORCHESTRATOR.

Configured specialists:

- explorer: read-only investigation
- designer: visual direction and UX
- implementer: application development
- qa: final testing only after explicit user authorization

Maximum 3 concurrent subagents.

The implementer is the sole owner of application code changes.

The designer and explorer provide findings and specifications, not competing code changes.

Delegate only when specialist work adds meaningful value.

## Installed skills

Global location:
C:/Users/info/.agents/skills/

DESIGN:
- design-taste-frontend
- frontend-design
- web-design-guidelines
- site-architecture

DEVELOPMENT:
- frontend-design
- programmatic-seo
- web-perf

QA:
- webapp-testing
- accessibility-audit
- seo-audit
- web-perf

OPTIONAL:
- canvas-design
- skill-creator

Read the relevant SKILL.md before applying a skill.

Do not load all skills for every task.

## Design identity

Preserve the original portfolio's distinctive creative personality.

Important characteristics:
- Dark cinematic visual foundation
- Classical marble sculpture
- Bonsai reveal
- Scroll-driven animation
- Refined gold accents
- Editorial typography
- Sophisticated motion

Original concept:
"Make your ideas visible."

Possible commercial evolution:
"Make your ideas visible. Make them work."

Avoid generic agency templates, excessive cards, random gradients and irrelevant stock visuals.

## Signature animation

The original scroll-driven sculpture animation is essential.

Reference implementation:
../askold-cv-reference/src/components/hero/

Original animation:
../askold-cv-reference/public/intro.mp4

Preserve its visual sequence and scroll synchronization.

Reuse original assets and GSAP techniques where appropriate.

Improve performance, accessibility, mobile behavior and reduced-motion support without destroying the original artistic concept.

## Website structure

Homepage:
1. Artistic animated hero
2. Business value proposition
3. Featured iLab case study
4. Additional selected projects
5. Services workbench
6. Process timeline
7. Personal chapter combining About and direct collaboration
8. Shared calm closing invitation, opening the existing contact modal
9. Black footer; contact opens in a full-screen modal (`/#contact`)

Additional pages:
- /work
- /work/[slug]
- /services
- /about (professional profile, experience and CV)
- /contact (legacy redirect to `/#contact`)

Contact is a full-screen modal panel, not an in-flow homepage section. Internal contact navigation and inquiry CTAs target `/#contact`, opening the shared panel above the current page; direct links and the legacy redirect must also work. Do not recreate a duplicate standalone contact page. The authorized Resend integration uses server-only `POST /api/contact` and `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, `CONTACT_TO_EMAIL`. Never expose these values to the client or commit `.env.local`. Show submission success only after provider acceptance; preserve entered data on failure and keep direct contact links and the no-JavaScript email fallback. Basic honeypot/input/request limits are not a distributed rate limiter.

About navigation targets `/about` from the footer and the approved secondary “More about me” link in the homepage personal chapter. Do not add it to the top bar. Keep the approved homepage personal chapter concise. Career and qualification details must come from the provided CV or confirmed owner information; do not infer language proficiency or additional qualifications.

Reuse the approved `PageInquiry` closing invitation once on the homepage, Work, Services, About and project-detail pages. Preserve its default copy and two-column charcoal composition; its button opens the existing `/#contact` modal. Do not add another form or contact panel.

Use English initially.

Prepare for Latvian and Russian localization later.

## Flagship project

iLab:
https://ilab.lv
https://ilab.lv/shop

This is the principal case study.

Showcase real design, functionality, architecture, SEO and measurable outcomes.

Use authentic screenshots and verified project information.

Do not invent metrics, client testimonials, functionality or analytics results.

If GA4 or Search Console results are unavailable, document the missing data and create reusable components without displaying fabricated figures.

## Technical direction

Preferred stack:
- Next.js App Router
- TypeScript
- React
- Tailwind CSS where appropriate
- GSAP / ScrollTrigger

Prioritize:
- Maintainability
- Accessibility
- Responsive design
- Core Web Vitals
- SEO
- Optimized media
- Strong visual presentation
- Conversion-focused content

Avoid unnecessary dependencies and overengineering.

## QA policy

This policy overrides all previous milestone-based QA schedules in these instructions and project documentation. No intermediate milestone automatically triggers QA. It applies to the orchestrator, specialists and skill workflows alike.

### Development phase

- Do NOT spawn the QA agent or invoke `visual_qa`, `functional_qa` or similar testing/review agents.
- Do NOT run browser-based QA after individual changes.
- Do NOT automatically perform visual audits or screenshot comparisons.
- Do NOT run Lighthouse, accessibility or SEO audits.
- Do NOT run full regression tests.
- Do NOT create QA reports after each implementation pass.
- Do NOT repeatedly run production builds.

During development, the Implementer may run targeted TypeScript or lint checks when necessary to catch errors. Run a production build only at significant integration checkpoints or when explicitly requested.

### Final QA phase

Activate QA only when the user explicitly approves that the entire website is finished and ready for final testing. Do not begin final QA without that authorization; milestone completion does not supply it.

Once authorized, final QA covers:

- Browser and responsive tests
- Functional tests
- Accessibility audit
- Performance and Core Web Vitals review
- SEO audit
- Cross-browser review
- Final production build

During authorized final QA, report reproducible issues by severity, fix critical and high-priority findings, and repeat only affected tests after fixes.

## Documentation

Maintain:

docs/PROJECT_PLAN.md
docs/DESIGN_DIRECTION.md
docs/ASSET_MANIFEST.md
docs/ANALYTICS_REQUIREMENTS.md
docs/QA_REPORT.md

Keep milestone status and important decisions up to date.

Do not create excessive documentation for trivial work.

Preserve existing QA records as history; create or update QA reports only during explicitly authorized final QA, not after development implementation passes.

## Execution

Make reasonable design and technical decisions autonomously.

Continue implementing rather than stopping after planning.

Ask for approval before production deployment, destructive operations or actions affecting the original repository.

Never report unverified work as completed.

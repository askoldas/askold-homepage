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
- qa: milestone-based independent testing

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
5. Services
6. Why work with me
7. Process
8. About
9. Contact

Additional pages:
- /work
- /work/[slug]
- /services
- /contact

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

Full QA is permitted only at major milestones.

MILESTONE 1:
Discovery, architecture and design direction.
No QA agent.

MILESTONE 2:
Signature hero, navigation and design foundation.
QA review #1.

MILESTONE 3:
Complete website and case studies.
No full QA agent.

MILESTONE 4:
Release candidate.
QA review #2.

The implementer may run fast TypeScript, lint and build checks during development.

Do not run complete browser suites after every component or edit.

QA must report reproducible issues with severity.

Fix critical and high-priority findings.

Repeat only affected tests after fixes.

## Documentation

Maintain:

docs/PROJECT_PLAN.md
docs/DESIGN_DIRECTION.md
docs/ASSET_MANIFEST.md
docs/ANALYTICS_REQUIREMENTS.md
docs/QA_REPORT.md

Keep milestone status and important decisions up to date.

Do not create excessive documentation for trivial work.

## Execution

Make reasonable design and technical decisions autonomously.

Continue implementing rather than stopping after planning.

Ask for approval before production deployment, destructive operations or actions affecting the original repository.

Never report unverified work as completed.

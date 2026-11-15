# Askold — proposed design direction

Updated: 2026-11-15. Milestone 1 direction for creative review. No finished homepage, hero implementation or visual QA is claimed.

## The idea

On this page, Askold's marble sculpture breaking to reveal a bonsai becomes the transition from an idea made visible to an inspectable body of working websites. The visitor controls the existing transformation through ordinary scrolling. This is the one signature interaction; the rest of the site earns trust with authentic work and clear explanations.

Audience: business owners and teams seeking a designer/developer for a commercial website, custom build or shop. First-screen belief: Askold combines a distinctive creative voice with practical web design and development. Next action: start a project or inspect selected work.

Preserve pure black, classical marble, bonsai, gold and editorial typography. Present Askold as an independent practitioner rather than implying a larger team. Keep the original line “Make your ideas visible.” The possible continuation “Make them work.” belongs in the commercial transition, not an unverified business-results promise.

Subject inventory: the existing sculpture animation; bonsai reveal; original black and gold; Inter/Cormorant pairing; personal Askold logo; iLab service website; iLab parts catalog; FixMobile interface/identity imagery; MasterBean packaging/store work; SeoQuill ordering interface; direct public email and phone. These supply the imagery and content; unrelated stock landscapes or invented dashboards do not.

## Composition choice and skill decisions

The installed taste skill dealt contact-sheet, uneven-photographs and name-as-monument. Choose **uneven-photographs**, seed **144849104**, with palette and type retained from the brand: varied image spans within one consistent 12-column frame. iLab gets the dominant image; other projects vary in size according to the evidence available. Image edges land on columns, with a small consistent set of offsets. Mobile is deliberately composed rather than a scaled desktop grid.

Explicit adaptations to the draw:

- The user's original sculpture requirement replaces the generated three-print hero and shutter effect. Preserve the authored video rather than add competing choreography.
- The brand's black ground/gold/established type overrides pale-ground language in the generic direction sheet.
- Existing project imagery and future authentic iLab captures replace the generated fog-photo suggestions. No generic or generated imagery was added.
- The single practitioner, missing portrait, five-stage process and unverified client endorsements do not fit the draw's multi-person pinned portraits, photographic drag carousel or proof-logo strip. Use a concise personal section, a native ordered process and evidence-backed collaboration statements. Do not infer endorsements from asset availability.
- Native scrolling and one principal hero take precedence over extra pinned introductory/about scenes. No repeated entrance choreography or ornamental rules.
- Browser/scene gates and the final full copy deck belong to Milestones 2–4 under the explicit user boundary; no screenshot score is claimed in Milestone 1.

## Tokens and typography

| Role | Foundation value |
| --- | --- |
| Canvas and media surround | `#000000` — avoid seams around black video |
| Occasional surface | `#141412` |
| Primary text | `#F2EFE7` |
| Secondary notes | `#B4B0A6`; running prose remains primary text |
| Gold | Original `#F0C332`, primarily contact action and focus |
| Body/UI | Inter, 400 / 500 / 600 |
| Display | Cormorant Garamond, 400 / 500 / 600 |
| Body | 18px / 1.6 initially; 16–20px responsive range |
| Display | `clamp(3rem, 9vw, 7.5rem)` / 1.02; tune to final hero copy |
| Section title | `clamp(2.25rem, 5vw, 4.5rem)` |
| Prose measure | 55–70 characters, maximum 65ch |
| Frame | Maximum 1440px, equal 24–64px fluid gutters |
| Spacing | 8px basis; foundation section range 80–160px |
| Feedback duration | 160ms |

Inter is retained deliberately as the existing supporting face; Cormorant supplies the connection to classical sculpture. Serve fonts locally from Fontsource packages with included licenses. This replaces the reference's Google-at-build font request without changing the type identities. The foundation loads Latin weights; inspect font language subsets before introducing Latvian/Russian content.

Use one face/color per headline, sentence case, left alignment, short titles and at most two title lines. Do not color one word as a generic emphasis device. Square media/control geometry, flat fills and underlined text actions. No eyebrow labels, numbered project captions, monospace ornament, hairline grids, gradients, glows, glass, resting shadows or identical feature-card rows. Keep secondary copy readable and focus visible.

## Homepage argument and hierarchy

| Section | Claim and proof | Composition / next action |
| --- | --- | --- |
| Artistic hero | Distinctive design and practical development, introduced by the original artwork | Artwork occupies roughly half of desktop opening, readable copy beside it. “Make your ideas visible.” plus plain-language supporting sentence. Start a project; View selected work. |
| Business value | Design, development and improvement work together | Short typographic statement explaining deliverables; avoid unsupported conversion promises. |
| iLab flagship | An inspectable service and commerce project | Largest authentic desktop capture with complementary mobile/detail view; confirmed context, role and scope; link to `/work/ilab`. |
| Selected work | Range demonstrated through actual outputs | Varied image-led compositions; project title, contribution, relevant discipline and case link. No project index numbers. |
| Services | Explain what a client can commission | Design, custom development, commerce, SEO and ongoing optimization; clear deliverables with supporting work links, not icon cards. |
| Why work with me | Direct collaboration and continuity | Concise statements substantiated by actual practice and delivered examples. No fabricated testimonials or trust-logo band. |
| Process | Explain client participation | Discovery, direction, build, launch and improvement in native ordered flow; include feedback/approval expectations. |
| About | Connect artistic approach and technical practice | Personal introduction and relevant evidence. Use a portrait only when an authentic approved one is available. |
| Contact | Give a clear next step | Direct verified email and preferred channels; real delivery states only if a form is later selected. |

```text
Desktop opening:                 Narrow opening:
Askold       Work Services CTA   Askold + accessible navigation
Editorial copy | original film  Short title and supporting copy
support + CTA  | marble/bonsai   Deliberately framed marble/bonsai
               |                Contact/work links remain usable
Business value
Large iLab interface + scope
Varied selected-project images
Services / collaboration / process / about / contact
```

No essential action waits for the video to finish. All page content exists in document flow without animation initialization. Final mobile crop and copy position depend on decoded-frame inspection in Milestone 2; avoid covering the bonsai with text or imposing a long scroll hold on a small screen.

## Motion and signature preservation

Canonical source: `public/intro.mp4` in the read-only reference. Its AVC1 container declares 480×720 and 1.015 seconds; source code seeks to `2 * progress`. The 205vh trigger includes a 105vh sticky hold, which ends around 51.2% progress (1.024s requested playback). This suggests the apparent duration mismatch may intentionally align the film's end with sticky release. Verify decoded frames and live pacing before normalizing the timeline; do not call this a proven bug or describe the 2-second code range as the clip duration.

Keep intact marble → breakup → bonsai in original order and synchronize progress to ordinary scroll. Preserve the visible pacing before improving seek scheduling or responsive behavior. Use a scoped GSAP lifecycle with cleanup, metadata readiness, coalesced seeks and reverse-scroll support. Avoid React text updates on every frame when DOM/timeline control suffices.

Reduced motion: intentional static frame, fully present message/navigation and no pinning required to access content. Media error or disabled scripting must leave a complete readable page. Extract the static poster from the canonical clip in Milestone 2; the existing `columntree.png` is a related standalone tree/column artwork on a colored background, not a verified matching final video frame. Do not silently substitute it as if it were the film's final frame.

Elsewhere motion should respond to user action or clarify a transition. Do not add continuous loops simply to satisfy a motion count. Use explicit transition properties, preserve native scroll and handle runtime reduced-motion changes.

## iLab case-study treatment

Present `/` and `/shop` as related experiences with real captures. Public reads on 2026-11-15 show a Latvian repair service website and a repair-parts catalog with device/model selection, compatibility and inquiry/cart/account interfaces. They establish visible UI only. Source architecture, transaction correctness and Askold's authorship require separate confirmation.

Case structure: business context → confirmed role and scope → authentic interface walkthrough → verified decisions → approved measured outcomes when available. Capture desktop/mobile service discovery and part-finding flows later without exposing customer or account data. Use text explanation beside image crops so the reason for a design choice is understandable.

No analytics figures, client testimonials or unverified technology claims. Optional results can be omitted entirely without leaving empty metric panels. Record missing proof in `ANALYTICS_REQUIREMENTS.md`. Do not equate an iLab business rating or catalog size with this website project's result.

## Responsive and accessibility contract

Use a 12-column desktop frame and simpler tablet/mobile grids. Alternate project image spans within the same equal gutters; collapse to readable narratives without horizontal drag requirements. Minimum 44px action target height. Account for safe-area insets and browser chrome with deliberate viewport units in the later hero.

Semantic landmarks, one h1, hierarchical section headings, skip link, visible focus, native links/buttons, explicit media dimensions, descriptive alt text and dark color scheme are foundation requirements. Later forms require persistent labels, useful autocomplete, server validation and accessible submission status. The future nav must not obscure focused controls or anchor destinations.

Routes, internal links and localization decisions are in `PROJECT_PLAN.md`. This proposal is ready for creative review; browser composition, contrast measurement and actual hero fidelity remain later verification work.

# Askold — proposed design direction

Updated: 2026-11-21. The current homepage is broadly approved and protected; historical hero-polish notes below are superseded by that approval. The established identity now informs the secondary-page evolution and dedicated About profile. Comprehensive QA requires explicit approval of the finished website; historical review scope is in `QA_REPORT.md`.

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
| Contact | Give a clear next step | Direct verified contact channels and Resend submission states confirmed by provider acceptance. |

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

Desktop scale refinement (2026-11-16): at widths ≥1024px, reserve the measured header height plus 16px above the sculpture. Center the original portrait within the remaining space and size its frame to 115% of that available height to compensate for internal black margins. Keep the viewport's right gutter and right-aligned desktop navigation. There is no minimum-height condition, so shorter/zoomed desktop windows receive the same treatment. Focused Chrome checks at 1264×559, 1440×600 and 1440×900 confirm the clear navigation band, complete sculpture/bonsai and no horizontal overflow; the 390×667 mobile layout and scroll timing remain unchanged.

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

## Milestone 3 application

Use the real interfaces as the proof: iLab is the largest homepage feature and first work item; Frio Estrella and Latvir form an unequal, offset pair. FixMobile and SeoQuill extend the work index with original project materials. New sections reuse the black/gold palette, Cormorant display type, Inter body type, equal 24–64px gutters and open typographic service rows. No new artwork, generic laptop shells, icon grids or background video loops were added.

Case pages lead with a short summary and authentic project image, then the longer introduction and industry/scope facts. This keeps the image early on mobile without cutting useful context. The iLab narrative has greater depth, separate repair/shop imagery, a contained portrait capture and verified service-site SEO explanations. Original archive images retain their identity as earlier project material. Qualitative outcomes complete each case without empty analytics panels.

Services explain the business use, deliverables and relevant project evidence. The full-screen gold Contact modal offers asynchronous server-side Resend submission alongside direct contact links; wording distinguishes accepted sends from failed requests. Additional movement is limited to existing interaction feedback, preserving the sculpture as the signature sequence.

Designer specifications were supplied through the orchestrator's document/skill relay; the Designer did not independently inspect rendered pages. Explorer performed bounded read-only source research, Implementer edited application code directly, and the orchestrator captured public media and performed limited development checks. No Milestone 3 QA agent or full visual/a11y/performance audit was run.

## Homepage Phase 1 — monumental signature hero iteration

This hero-only iteration supersedes the earlier complete-bust opening, without changing the restored commercial sections. Keep the original 480×720 film and its authored marble/bonsai sequence. A larger initial media frame deliberately crops the pedestal; slow vertical parallax leads into a pullback completed by 42% local hero progress. Full foliage, the inner pot, broken sculpture and pedestal must fit in the final composition. Desktop preserves the navigation band and copy area; portrait mobile frames the image between copy and persistent actions, using a smaller crop multiplier. Reduced motion, media failure and oversized-text fallback keep complete static artwork in ordinary flow.

Use one stable two-line text slot and DOM character counts: hold greeting through 14%, erase 14–23%, type “Make your ideas / visible.” during 23–40%, hold through 63%, erase 63–72%, type “Make them / work.” during 72–85%, then hold. No final-headline crossfade. The video holds initially, advances slowly during 18–42%, completes during 42–80% and holds its original last frame. All updates share the reversible hero-local timeline.

Begin with 400svh desktop and 250svh compact active travel, in addition to the viewport-height sticky stage. Native scrolling remains unrestricted. A small downward arrow is a real 44px skip link with an accessible name and visible keyboard focus; its short float stops after two cycles and is disabled for reduced motion. Keep the existing contact/work actions. No new artwork, dependency or movement outside the hero. This is a proposed implemented iteration for user review, **not final creative approval**.

### Hero sequence correction — 2026-11-20

The latest user direction supersedes the pullback and early parallax above. Preserve the exact oversized opening scale and position throughout the film, including the completed bonsai reveal at 80% hero progress. No zoom-out or artwork drift occurs during transformation. Upward artwork-only travel begins at 88%, before the sticky stage releases at 100%, and continues until the stage leaves the viewport. Total independent offset is 24svh desktop / 18svh compact, with the existing 0.3-second scrub smoothing; scale stays constant. Cropped pedestal framing is intentional. The tree is visible before exit and naturally leaves the viewport during exit. Typing, native scrolling, responsive opening geometry and static fallbacks remain unchanged. Final creative approval is still pending.

### Targeted visual refinement — 2026-11-20

This later brief supersedes the 88% ascent above. Designer compared frameless presentation with a restrained architectural aperture and recommends frameless: a matte consumes mobile room and weakens the monumental object without resolving clipping. Keep the original non-vignetted `intro-orig.mp4`, authored background and existing scale. No border, artificial gradient, mask or new artwork.

The crop came from the transformed media exceeding `.artwork`'s clipped aperture, with only roughly 6–12px of crown/canopy headroom. Reserve upward travel plus 24px desktop / 12px compact clearance using the conservative source bound y=49/720. This adjusts the opening position, not scale; the lower pedestal may remain outside the viewport. Mobile clipping continues to protect copy and actions.

One scrubbed, hero-local timeline coordinates everything through native departure: stationary introduction; video starts at 18%, accelerates at 42%, completes at 72%; final text types from 72–85%, with upward artwork travel beginning at the same 72% boundary. Following the requested speed adjustment, travel reaches 12svh desktop / 6svh compact at release (100%), 50% faster than the initial iteration, and continues at that rate through departure. Matching opening headroom preserves canopy clearance. Completed headline and bonsai remain visible during 85–100%. Keep 400svh desktop / 250svh compact active travel and 0.3-second smoothing. No independent exit ScrollTrigger. Final visual/timing approval remains pending.

Departure clarification: the initial speed adjustment was visually insufficient after release. Keep the entire pinned sequence unchanged, then add 0.55px desktop / 0.4px compact upward artwork travel per pixel of departing page scroll, ramping velocity over the first min(96px, 10svh). This is derived from the same timeline, with continuous position and speed at release, and reverses with scroll. Verify artwork displacement against the departing stage, not only at pinned checkpoints.

Latest user direction supersedes all parallax above: retain the current oversized opening size and position as a fixed composition within the hero. Keep the scroll-driven original transformation and typing; remove independent artwork movement, including departure offsets. The artwork leaves together with the hero in ordinary page flow. Existing responsive headroom is now static composition space.

The full sculpture must remain reachable: retain the viewport-sized composition for scale calculations, but reserve an outer hero stage tall enough for the entire media canvas. The stage releases normally after animation, allowing its base to scroll into view before the value bridge. Mobile actions follow the artwork instead of covering it. Center the 44px down-arrow horizontally near the first viewport's bottom; first activation advances to the lower artwork, and a subsequent activation continues to the value bridge. Preserve native scrolling and reduced-motion handling.

Headline sequence now reads “Hello, I'm / Askold.” → “Let's make your / ideas visible.” → “Then make them work / for your business.” Keep letter-by-letter typing/erasing in a stable two-line slot. Measure all message lines and fit type only when needed; do not shrink the sculpture to fit the new copy.

The taller-canvas iteration was rejected for excess empty space. Return to a compact 100svh stage with the coordinated parallax and stronger departure described above; preserve the latest headlines, sculpture scale and centered cue. Actions remain visible within the first viewport on mobile. The cue scrolls directly to the value section. There is no decorative gold hero divider: the intermittent full-width line was a focus outline on a 1px continuation target or the entire value section. Remove the artificial target and focus the value heading for cue/direct-fragment navigation, keeping visible keyboard focus on the heading and interactive controls.

## Homepage Phase 2 — featured work and artistic page headers

Preserve the signature homepage hero, navigation, typography, tokens and all unrelated sections. The Designer read the installed `design-taste-frontend`, `frontend-design` and `web-design-guidelines` skills and inspected original artwork frames and authentic iLab captures. This is a scoped extension of the approved identity, not a new site direction.

The iLab service screenshot occupies 82% of the composition; the shop occupies 44%, overlapping toward the lower right. Keep the authored screenshots rectangular and frameless. Reserve the complete composition height, then place concise supporting text and the case-study link below. Mobile uses a full-width service image and an 84% shop image with only 24px overlap.

The selected-work carousel keeps the unequal editorial pair: 7:5 desktop proportions, a lower secondary project and a continuous horizontal transition. The same secondary project moves into the primary position; do not substitute a crossfade or equal-card slider. Order: Frio Estrella, Latvir, MasterBean, RubinRub, FixMobile, SeoQuill, BTX Outlet. Mobile shows a large primary image and a smaller upcoming peek. Use explicit controls, keyboard and touch navigation, no automatic advancing, and instantaneous reduced-motion transitions.

Work and Services receive independent, content-height artwork headers using the original square bonsai and classical capital films. Preserve each full canvas, balance editorial text with art capped at 520px, stack at tablet widths, and use a 300px maximum on phones. No pinning, parallax, decorative frame or new generated imagery. Ambient motion has a pause control; reduced motion shows the original-frame poster without requesting the video.

The four restored archive cases reuse the established case-page architecture and authentic portfolio images. Their optional, manually activated introductions use original footage with original logos, clearly labeled as portfolio introductions. Stefanel Riga remains retail merchandising and marketing design, without software-development claims. No invented metrics or testimonials. Final visual approval remains with the user; homepage hero scroll timing remains an open task.

## Homepage tonal chapters — manual review iteration

The current hero, iLab composition and carousel are approved. This refinement changes only homepage background bands and outer section padding; typography, content, image arrangements and interactions remain fixed. Use ordinary full-width wrappers around the existing constrained sections, keeping original gutters and avoiding overflow, masks or painted overlays.

| Chapter | Sections | Background |
| --- | --- | --- |
| Value bridge | Business value proposition | Warm charcoal `#11110F` |
| Project evidence | Featured iLab and selected work | Pure black `#000000` |
| Offering and collaboration | Services and how we work | Deep bronze `#1B1915` |
| Practice and person | Process and about | Near-black `#090909` |
| Contact close | Homepage inquiry invitation | Warm charcoal `#11110F` |

The hero and footer retain black. Related sections share a field rather than alternating colors section by section. Boundaries are direct changes of tone, without gradients, borders or new ornament. Existing off-white, muted text and gold remain unchanged on all four dark tones.

Keep the value bridge relatively compact (56–96px outer padding), with more room at the proof chapter's outer edges (80–128px). Reduce the doubled gap between iLab and the gallery to 40–64px on each side. Services, collaboration, process and about use varied 40–128px outer padding to connect related text sections; the contact close has 80–144px. Responsive clamps provide this variation without changing component interiors. These are homepage-only overrides; interior pages and shared component defaults retain their existing rhythm. Implementation is for manual review, with no automatic screenshot review or browser audit.

## Digital Atelier — lower homepage transformation

This direction replaces the earlier lower-page tone-only refinement. Everything through the selected-work carousel remains protected, including the introduction bridge and upper spacing. The Designer used the configured GPT-6 Astra/high role and read the actual installed `design-taste-frontend`, `frontend-design`, `web-design-guidelines` and `site-architecture` skills before defining the following sequence. Existing-section guidance preserves the established identity; the user's QA restrictions take precedence over skill screenshot/audit gates.

| Chapter | Composition and purpose |
| --- | --- |
| Services — warm charcoal `#1B1915` | “Made for your business.” A typographic workbench with oversized Inter words: Brand, Web, Build, Improve. Off-white text and restrained gold accents replace the rejected bright bone field. Native disclosures expose concise explanations and links to all seven existing service anchors. No cards, hover-only information or new services page. |
| Process — black `#000000` | “How we get there.” Five real stages beside a monumental sticky Cormorant counter and a fine gold line representing scroll progress. Ordinary scrolling, no pinning or second cinematic runway. Mobile, reduced motion and no-JS retain the complete numbered sequence. |
| Personal — bronze `#211D17` | “One person. Every detail.” One authored statement combines collaboration and About. Overscale typographic `.ME` reuses the existing identity, with Askold's actual name and direct design/development involvement. No fabricated portrait, team, statistics or awards. |
| Contact modal — gold `#F0C332` | “Have an idea? Let’s make it real.” A full-screen panel above the current page, containing direct email, WhatsApp and a compact inquiry form. Internally scrollable on small screens, with transparent underlined fields, dark focus indicators, a dark primary action and an explicit close control. The homepage ends with the black footer. |

Keep Cormorant and Inter, the 1440px page frame and responsive gutters. Distinguish chapters through scale, composition and density, using clean color cuts. Service words respond to hover/focus; native activation opens their detail. Process movement is scoped to its own chapter, with cleanup and reduced-motion handling. Essential content remains visible without animation. The personal chapter provides a mostly still pause.

Contact uses `/#contact` as its direct entry, with `/contact` as a legacy redirect. Contact actions open a shared modal without scrolling the underlying page. Escape and the close control dismiss it; background interaction is blocked while open and focus returns on dismissal. This supersedes the earlier in-flow contact finale. The authorized Resend integration replaces the earlier email-draft/copy workflow with asynchronous submission to `POST /api/contact`, preserving the gold layout, animations and direct contact links. The form asks only for name, email and project description; no service selector or hidden service default. Show “Send inquiry”, “Sending...”, provider-confirmed success or a generic retry error. Give success a persistent checkmark, readable confirmation and short thank-you line, bringing it into view without a new modal or timed dismissal. Preserve entered information on failure and the direct-email no-JavaScript fallback. Native autofill remains enabled, with scoped gold paint and dark text/caret to match the form. No client-side API keys or analytics instrumentation.

Research informed principles, not copied designs: [Dennis Snellenberg's portfolio](https://dennissnellenberg.com/) connects personal identity, selected work and a direct contact invitation; its [Awwwards entry](https://www.awwwards.com/sites/dennis-snellenberg) specifically highlights navigation and contact. [Bruno Simon's portfolio](https://bruno-simon.com/) makes an authored interaction express the creator's craft and exposes alternative input controls. Applied interpretation: retain the sculpture as Askold's signature, while useful lower-page interactions support service discovery and contact. These references do not imply any award or nomination for Askold. Final visual evaluation remains the user's manual review.

## Secondary pages and professional profile

The approved homepage is the visual authority. Preserve its composition, sculpture choreography, project carousel, process interaction and shared contact modal; only About navigation/linking changes are permitted there. Extend Cormorant/Inter, equal responsive gutters, the 1440px frame, black, warm charcoal/bronze, off-white and restrained gold. The recently rejected bright bone Services field is not reintroduced. Layout and authentic imagery provide variation, rather than new decorative colors or gradients.

The requested Designer session hit its usage limit before completing this pass. The orchestrator therefore read the actual four installed skills (`design-taste-frontend`, `frontend-design`, `web-design-guidelines`, `site-architecture`) and prepared the implementation specification. This is not an independent Designer review. The taste draw reuses **uneven-photographs**, seed **144849104**, with palette/type retained. Its generic stock photography, pale ground, replacement hero and pinned portraits conflict with the approved artwork, authentic-media constraint and absence of personal photography; they are deliberately excluded. Its varied image spans and consistent grid inform the archive and cases. Browser gates, screenshot loops and audit instructions remain overridden by the user's development QA policy; no score is claimed.

The page arguments are distinct: Work lets visitors inspect actual outputs across disciplines; Services connects an offer to deliverables and relevant examples; cases explain the specific business/design problem through original screens; About connects business experience with creative and technical implementation. Askold's actual repair/shop architecture, coffee identity/packaging, ordering interfaces and retail materials become a curated gallery, rather than interchangeable agency illustrations.

- **Work:** preserve the bonsai header. Make iLab a dominant opening project; use frameless images at varied column spans for the complete archive. Explicit categories distinguish custom development, business websites, commerce, identity and creative/marketing work using verified scope. URL-linked navigation/filtering must retain an obvious All work option and meaningful empty states.
- **Services:** preserve the capital header. Group all seven existing offers into four chapters with different compositions: identity with authentic MasterBean evidence, web design with business-site evidence, custom builds/commerce/applications with useful detail disclosures, and a compact optimization/support close. Retain every service anchor, deliverable and fit description; avoid reproducing the homepage workbench or making every example iLab.
- **Cases:** evolve the working shared template. Vary full-width landscapes, portrait-and-copy compositions and text-only passages; keep complete factual copy, original media/video controls and conditional verified results. Technical systems, identity/commerce and physical/marketing work receive appropriate composition without invented project colors, screens or outcomes.
- **About:** “Experience meets curiosity.” introduces Askold by name and role, followed by a short client-facing story, editorial career chronology, selected expertise, education/training, Riga/languages and the supplied CV. Large date typography and readable role descriptions replace a process-style active counter. A typographic identity motif may move subtly; it is not a portrait substitute or another pinned scene. Languages carry no invented proficiency labels.

Navigation remains flat: Work, Services and Contact in the header; About is linked in the footer and, under the latest refinement below, through a secondary homepage personal link to `/about`. The existing `/#about` bookmark remains valid. Contact stays `/#contact` and uses the existing modal, server-side Resend submission and direct contact links. About has a canonical, descriptive metadata, sitemap entry and verified Person fields without changing indexing or domain settings. Final composition and interaction approval remain a manual review step.

### Project media refinement

The owner's latest direction supersedes the manual archive-video controls described above. No visible introduction captions or play/pause controls, including the Work/Services artwork headers. Project introduction films play once when they enter view and hold their final frame; fully leaving and re-entering restarts them. They are no longer scroll-scrubbed. Work/Services artwork headers loop independently of scroll, playing muted inline while visible and pausing offscreen or in hidden tabs. Do not loop the project introduction films or change the homepage sculpture's scroll synchronization. Reduced motion, no JavaScript, media failure and blocked autoplay retain the original poster and mark.

Integrate film into each project's story instead of repeating a small player below every overview: MasterBean opens with its coffee film, BTX leads with the original dark Black Friday campaign and places its film with the identity story, RubinRub follows its existing-brand introduction, and Stefanel connects film with merchandising. Retain authentic logos and imagery; footage is original portfolio material, not evidence of client film production. Use a curated main narrative with an expandable supporting gallery for additional genuine applications and interface screens. Small original assets stay at suitable sizes; no invented photography, achievements or metrics. Keep the established black/gold palette, typography and responsive grid.

## Targeted homepage finishing direction

The Designer used the requested installed `design-taste-frontend`, `frontend-design` and `web-design-guidelines` skills to refine the approved composition. This is a scoped finishing pass, with source-based design decisions and no browser audit or screenshot review.

- **Sculpture:** preserve measured stage/artwork dimensions and the complete existing controller. At desktop widths ≥1024px, allow 12svh of bounded bottom paint overflow, horizontally confined to the artwork side. Both scoped paint layers use horizontal clipping and visible vertical overflow, with an explicit bottom clip path; do not rely on `overflow-clip-margin` or a minimum window height. Reserve the same space above the introduction content, whose plane sits above the artwork. Mobile and static/overflow fallbacks retain their clipping and spacing. The latest owner direction permits open accents, rather than an enclosing frame: two asymmetric pairs of ivory/gold strokes, upper right vertical and lower left horizontal. Keep all four strokes within the visible artwork area, independent of the oversized video's offscreen edges. No connected corners, full rectangle or added motion. Hide accents on mobile and static/reduced-motion fallbacks. Blend black source pixels into charcoal without a new vignette or altered media. Rendered compositing remains subject to manual review.
- **Services:** one active key, initially Brand; selecting the same service closes it. Preserve the current workbench appearance, accessible button state and approximately 280ms interruptible height transitions; closed links are not focusable and reduced motion is immediate.
- **Entrances:** repeat scoped GSAP sequences on scroll-in from either direction. Prepare start states only when both natural and painted bounds are fully offscreen; visible content must never jump back to an entrance's start. Entry uses a forward tween to the final state, with no `fromTo` reset. Initially visible content stays final until a later full exit. Use untransformed layout coordinates and independent heading, introduction-paragraph and image anchors. Trigger within the central 74%/26% band; the masked `.ME` enters later at 65%/35%. Introduction heading/copy travel 30px/22px. iLab images remain fully opaque with 36px/32px travel; selected/services headings travel 32px/34px, `.ME` 36px, closing heading/action 28px/20px. Reverse-entry preparation offsets toward the preceding viewport edge. Keep the approved hero, process, accordion and carousel unchanged. No new pins, per-frame React state or dependencies. No-JS/reduced-motion content stays visible; focus completes the entrance without preventing later offscreen replay.
- **Personal and closing:** replace the personal contact text link with secondary “More about me ↗” after the description. Reuse the existing `PageInquiry` default invitation once per required page, preserving its charcoal, typography, spacing, yellow action and contact-modal destination.
- **Footer:** black, with three aligned rows: name/navigation; phone, WhatsApp and Telegram grouped together at the left; then email opposite the studio description on a shared baseline. Use a 28px name, matching 18px phone/messaging links and matching 16px email/description. Display the verified number instead of “Phone”; retain the original icons and destinations. WhatsApp turns green and Telegram blue on hover and keyboard focus, while other links retain gold feedback. Stack rows at mobile widths with the messaging pair together and consistent left alignment. The homepage personal chapter meets the closing CTA directly, without an exposed black margin between their background fields; secondary-page CTA spacing is preserved.

## Services-only redesign — the service edition

The owner's complete Services brief supersedes the earlier Services composition and the restriction on an ivory Services field. The Designer applied the installed `design-taste-frontend`, `frontend-design`, `web-design-guidelines` and `site-architecture` skills. The actual taste draw selected `uneven-photographs`, seed `1643323304`, retaining the established palette/type and unequal image rhythm. The brief explicitly authorizes numbered rows, thin directory dividers and one warm-ivory chapter; it overrides alternative artwork, stock imagery, pinning and replacement CTA suggestions. No browser gate, visual audit or QA score is claimed.

The page is an edition of services, with project fragments as evidence:

1. Preserve the existing capital film, looping playback, “Design with a clear purpose.” heading and hero composition.
2. Follow immediately with the primary seven-row index: identity, web design, custom development, commerce, applications, SEO/performance and support. Whole-row native links, large Cormorant names, restrained Inter numbers, thin rules and gold hover/focus indicators make it useful navigation rather than small secondary links. Keep the seven canonical fragment IDs and fixed-header clearance.
3. A bronze `#1B1915` identity chapter leads with concise scope and six deliverable phrases. The owner's follow-up replaces the mixed identity wall with a manual carousel: FixMobile, SeoQuill and MasterBean, each shown through multiple authentic assets grouped into one composition. Keep uncropped imagery, brand-name selection, previous/next controls and native swipe scrolling, without autoplay. One discreet link opens the existing identity-filtered Work archive. Mobile gets a compact composition rather than a compressed desktop wall.
4. Warm ivory `#E9E3D8` gives web design one distinct editorial spread: “Designed to make an impression. Built to make a difference.” Clear structure, design, responsive layouts and user journeys lead; small iLab and FixMobile examples supply proof under the owner's updated selection. Keep dark text/focus treatment on ivory; screenshots must not dominate.
5. The black technical chapter separates Custom web development, E-commerce and Web applications through a manual keyboard selector. Each has its own description, use cases, deliverables and genuine proof. Native hashes activate the matching service; tab changes preserve framework history state without scrolling. Render all three articles server-side, reserve the tallest enhanced panel with CSS, and expose normal-flow content through the no-JavaScript fallback. ARIA tab roles and inert states are applied only after enhancement; the no-JavaScript fallback exposes all three articles. No new pinned scene or animated panel heights.
6. A compact charcoal `#11110F` close presents SEO/performance and ongoing support as distinct rows under “Good work doesn’t end at launch.” Capabilities replace charts, fabricated metrics or ranking promises. The existing shared inquiry CTA follows once, with its approved default copy and gold-modal destination.

Use the existing Cormorant/Inter, page width and responsive gutters. Vary composition, density and chapter spacing; keep movement to directory feedback and a short technical-panel transition with reduced-motion support. No paragraph entrance sequence, generic cards, repeated inquiry buttons, separate process chapter or new contact form. Shared service records and all other pages/components remain protected.

The owner's service-example mapping is explicit: iLab and FRIO ESTRELLA for custom development; the iLab parts shop and MasterBean's WooCommerce store for e-commerce; SeoQuill's ordering interface for web applications. Small evidence groups support each offer without turning the page into another project archive. Reuse the approved direction and actual assets; no new taste draw, page-wide redesign or browser gate for this targeted follow-up.

## Mobile hero — native forward/reverse playback

After discussion, the owner approved normal video playback in both directions on mobile, supported by the compact sticky stage. At widths up to 760px, deliberate downward scrolling triggers one normal playback of the original marble/bonsai film. Returning to the top triggers normal playback of a genuinely reversed derivative of that same film, rather than a loop of reverse seeks. Ignore small direction jitter and hand off at matching completed endpoints to avoid artwork jumps. Keep the approximately 90svh sticky travel and native departure; a fast-scrolling visitor can pass without being forced to wait.

Coordinate the two-message typing/erasing sequence with the active film's playback progress, with no separate text timer and no per-scroll video seeks. Keep the oversized opening composition, “Let's make your ideas visible.” final mobile phrase and fixed “Independent web design & development.” subline. Hide the visible mobile scroll cue but retain keyboard continuation. Keep CTAs at the bottom of the sticky hero with safe-area clearance; they leave with the hero. Pause/resume both film and typography offscreen or in a hidden tab, preserve static/reduced-motion/error fallbacks, and load reverse media only in mobile mode. Desktop retains its original video asset, scroll controller, typography choreography, framing and motion. Rendered phone smoothness remains subject to manual review; source checks are not visual approval.

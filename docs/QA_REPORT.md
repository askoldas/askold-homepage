# Validation record

Updated: 2026-11-16. Includes the focused Milestone 2.1 refinement review below. No production release approval is implied.

## Milestone 1 foundation record

No QA agent or browser/accessibility/performance review was used during Milestone 1.

| Check | Result |
| --- | --- |
| Dependency installation | Completed; exact direct versions and npm lockfile written |
| TypeScript (`npm.cmd run typecheck`) | Passed |
| ESLint (`npm.cmd run lint`) | Passed with zero errors/warnings after named PostCSS export cleanup |
| Production build (`npm.cmd run build`) | Passed after final cleanup, including TypeScript and static `/` plus framework not-found generation |
| Preservation assets | Canonical intro copied; SHA-256 matches source. Logo copied without edits. Neither asset is loaded by the foundation page. |
| Reference repository | Git working tree clean at discovery and final boundary check; no source writes, configuration or deployment commands issued |
| Font licenses | Both installed Fontsource packages contain `LICENSE` files |
| Dependency reproducibility | Exact direct versions match root lockfile declarations |

No production deployment or hosting configuration was created. The root has noindex/nofollow metadata. Only the foundation route exists; planned page URLs are documentation, not implemented routes. Contact is a native link to the public address found in the source, not a form integration or verified email-delivery test.

Known limits and later checks:

- Verify actual intro decoded frames, sticky release/timing, mobile framing, reduced motion, errors and navigation in Milestone 2; source metadata and arithmetic are not a visual fidelity test.
- The package registry resolved ESLint 9.39.5 and npm emitted its support-lifecycle deprecation warning. Lint works; review the supported linter/Next configuration combination before release. No package security audit is claimed.
- iLab role, architecture, screenshot publication scope and analytics outcomes remain unverified. No fabricated cases or results were rendered.
- Planned milestone reviews are Milestone 2 review #1 and Milestone 4 review #2. Execution limits are recorded below; this build record is not release approval.

## Milestone 2 review #1 — completed

The complete hero/header/value bridge was built before activating the QA specialist. Specialist sessions have no callable filesystem/browser tools: the orchestrator executed the browser checks and supplied source, screenshots and measurements; the QA specialist assessed that evidence and assigned severity. Do not describe this as independently executed QA. Designer likewise reviewed relayed geometry against the existing art direction. No Explorer was required.

Actual rendering used the installed design skill's CDP helper and local Chrome against the production build on `127.0.0.1`. The browser connector was unavailable; Python was not runnable, so the installed `webapp-testing` reconnaissance/action workflow was adapted to CDP rather than reported as Python Playwright execution. The installed `web-perf` and `accessibility-audit` skills/checklist were read and applied by the orchestrator.

### Defects and affected retests

| Severity | Reproducible issue | Resolution / final evidence |
| --- | --- | --- |
| P1 | At 390×667, the negative compact trigger start loaded the film at 0.16925s, already into breakup | Trigger begins at `top top`; final mobile opening time 0s, reverse returns to 0s |
| P1 | At 320px with doubled font sizes/line heights, fixed nowrap title expanded content to 521px and header controls collided | Intrinsic grid title layers wrap; header wraps; overflowing desktop copy releases sticky hold. Final simulated 200% text retains 320px scroll width. Tablet/desktop enlarged copy uses normal flow and measured header clearance |
| P1 | Compact final frame arrived after the bonsai's upper region had scrolled out of view | Compact endpoint now uses the artwork's document position. At 390×667, final time 1.009925s with full artwork y23.83–443.83; at 834×390, full artwork y24–366. Reverse returns to 0s in both |
| P2 | Header arrows/dashes became question marks during the tool relay | Encoding-safe JSX restored; verified in rendered header |
| P2 | Unused image lint-suppression directive | Removed; final lint has zero warnings/errors |

No critical or high-priority defects remain in the supplied evidence. Only affected behavior was repeated after fixes.

### Behavior and visual checks

| Check | Observed result |
| --- | --- |
| Desktop 1440×900 / tablet 768×1024 | Whole sculpture with separate editorial text and usable actions; no horizontal overflow. Desktop native wheel reaches final frame and reverses to 0 |
| Mobile 390×667 / 320×700 | Normal document flow, visible early actions, two-line default headline; no horizontal overflow. Complete final portrait visible before bridge |
| Short landscape 834×390 | Portrait scales to 228×342 and finishes fully inside the viewport; no sticky trap |
| Text choreography | Intro fades, brief artwork-focused interval, then “Make them work.”; support/actions stay available and semantic h1 remains stable |
| Mobile navigation | Native disclosure works with click/Space, keyboard Tab, Escape/focus return and outside click; open menu links are 342×48 at 390px |
| Skip links | Keyboard-focused root skip link is visible with gold outline; Enter focuses `main-content`. Skip animation focuses `approach` and bypasses the sequence |
| Reduced motion | No video element or intro MP4 request on reduced-motion load; final-frame picture, normal flow. Runtime preference changes remove/recreate media and restore text without exceptions |
| Video failure | Blocked intro request produces final-frame still and normal document flow; copy/actions remain usable |
| JavaScript disabled | Server-rendered copy, first-frame still, actions and native mobile menu remain usable |
| Rapid updates | 30 alternating scroll updates at ~16ms intervals produced 10 coalesced completed seeks, 2.3–64.4ms observed seek-event latency (mean 30.16ms), settled at final frame. At 4× CPU throttling reverse settled at 0s |
| Console | No browser exceptions reported in covered cases |
| Preservation | Original MP4 SHA-256 unchanged; both fallback stills have pixel-identical decoded RGBA compared with extracted original frames |

### Performance observations

These are local, unthrottled headless diagnostics, not field Core Web Vitals or an INP/Lighthouse pass. The desktop cold run preceded other page visits; subsequent readings may use a warm cache.

| Viewport | Observed LCP | Observed CLS |
| --- | ---: | ---: |
| 1440×900 initial cold review | 508ms | 0.00112 |
| 768×1024 review | 276ms | 0.02890 |
| 390×667 review | 240ms | 0 |
| 1440×900 affected retest, warm | 180ms | 0.00112 |

Network inspection found one 132,425-byte video request, approximately 182KB encoded JavaScript (including framework and GSAP), 4.7KB CSS and 70,812 bytes across three local font files. Six initially imported font weights were reduced to the three used. Normal and reduced-motion posters are 107,724 and 150,860 bytes respectively and lossless. No remote font or additional animation dependency is required.

The controller writes exact `currentTime` at most once per scheduled frame, waits for an in-flight seek, and then processes the latest target. It does not use an endless rAF loop or React state per scrub update. It handles readiness, late media, reverse scrolling, document visibility and cleanup. A trace attempt returned no trace events; timeline/CPU trace analysis is unavailable and no conclusions are drawn from that empty trace. PerformanceObserver, resource timing and seek measurements were available.

Implementation references checked: [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/), [HTMLMediaElement.currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime), [Web Vitals](https://web.dev/articles/vitals).

### Accessibility audit: hero foundation

**Input:** rendered page/DOM/CSS, representative screenshots, keyboard interactions and 320px reflow. Same hero screen with normal, menu, focus, reduced-motion and media-failure states. Text enlargement was a computed font/line-height simulation, not native browser text zoom.

**Checked and clean in this scope:** 1.1.1 non-text content (decorative artwork hidden/empty alt); 1.3.1 information/relationships (landmarks, stable h1 and bridge h2); 1.4.3 text contrast (actual ink on black 18.28:1, black on gold 12.56:1); 1.4.10 reflow (320px rendered without horizontal overflow); 1.4.11 non-text contrast (gold focus on black 12.56:1); 2.1.1 keyboard (links and native disclosure); 2.1.2 no trap (Tab leaves controls); 2.4.4 link purpose; 2.4.6 headings/labels; 2.4.7 focus visible; 2.4.11 focus not obscured in tested states; 2.5.8 target size (actions/summary at least 44px high, menu links 48px); 4.1.2 name/role/value (native disclosure role and expanded state exposed in the accessibility tree).

**P0/P1 remaining accessibility findings:** none in the supplied evidence. The P1 enlargement/reflow defect above was fixed and its diagnostic retest passed.

**Not fully verifiable / outside this screen's scope:** 1.4.4 resize text — the 200% CSS simulation passes after fixes, but native browser text enlargement still needs release validation. 3.2.2 on input, 3.3.1 error identification, 3.3.2 labels/instructions and 3.3.8 accessible authentication — no settings/form/authentication flow exists in this milestone; these are not certified as tested passes.

This accounts for all 18 criteria in the installed checklist. Criteria identifiers refer to [WCAG 2.2](https://www.w3.org/TR/WCAG22/). This expert review does not replace assistive-technology/user testing or constitute legal compliance certification.

### Final checks and remaining validation

- `npm.cmd run typecheck`: passed on final application changes.
- `npm.cmd run lint`: passed, zero warnings/errors.
- `npm.cmd run build`: passed, including TypeScript and static root/not-found generation.
- Original reference working tree remains clean; original clip hash matches. No production hosting/DNS, analytics, form backend or client-data changes.
- Carry to release validation: native browser text resizing, Safari/iOS and physical touch devices, field Core Web Vitals/INP and a usable performance trace. These remain explicitly unverified.
- The ESLint support-lifecycle package warning from Milestone 1 remains a release toolchain review item.
- Full Work/iLab/Services/Contact pages and remaining homepage content are deferred to Milestone 3. Current work actions use the real existing portfolio; there are no broken placeholder routes.

## Milestone 2.1 — focused hero refinement review

Scope: revised local scroll geometry, synchronized typing/video, mobile containment, native wheel/touch input, reverse/release, direct navigation and affected fallbacks. The original fast pacing was confirmed from the controller and actual geometry; the Milestone 2 checks above did not establish acceptable cinematic pacing. No Milestone 3 work was tested or implemented.

Execution: one QA activation after the entire revision was ready. The orchestrator ran the installed CDP/Chrome helper against a local production build and relayed its measurements to QA, which had no browser/filesystem tools. Designer/Implementer supplied specifications and code through the same tool relay. This is not an independently executed agent browser audit. Installed `web-perf`, the adapted `webapp-testing` workflow and taste-skill motion guidance were applied; the earlier accessibility checks were retained with affected checks below.

### Findings and affected retests

| Severity | Reproduction / finding | Resolution and retest |
| --- | --- | --- |
| P1, resolved | Initial `/#approach` loaded before hydration expanded the hero; mobile remained at y477 with the destination 1857.5px below the viewport. | Once-only restoration after active runway setup. Direct loads and skip activation now reach visible, focused content on desktop/mobile. Reversing to the top stays there; no recurring anchor restoration. |
| P1, resolved | From mobile content, resize 390×667 →320×700 and immediately scroll to zero. The visual retained its previous timeline state for more than 2.3s until another scroll. | One reconciliation after refresh finishes the previous scrub and applies refreshed progress through the same timeline. Retest at y0 shows greeting/frame0; forward to 90% and reverse restore final/opening states correctly. |

No critical or high-priority findings remain in the supplied evidence. Only navigation/resize and related forward/reverse paths were repeated after these fixes.

### Browser evidence

| Check | Observed result |
| --- | --- |
| Desktop 1440×900 | Active travel **3150px**, wrapper 4050px, sticky stage 900px. A native 120px wheel gesture remains in the intact/greeting hold. |
| Coordinated phases | At20% greeting is erasing/video≈0.032s;35% idea is typing/≈0.133s;45% complete idea/≈0.201s;60% breakup/≈0.547s;80% final video frame;90–100% final headline and bonsai held. No moving layout during typing. |
| Native wheel/reverse/release | Stage remains at top through travel, releases after 3150px, and bridge enters normally. Native reverse reaches greeting/frame 0. No wheel interception, body lock or CTA unlock. |
| Rapid changes | Twenty alternating scroll positions at 16ms intervals settle at the latest requested final frame, 1.009925s, with no seek left in flight. Seventeen seeks in this local run: mean 14.2ms, maximum 26.4ms. |
| Document independence | Injecting 5000px of test-only content below the bridge leaves travel 3150px and the 60% video position unchanged. Test content was never added to application code. |
| Resize | Desktop 900→800px viewport recalculates travel 2800px; reverse reaches frame 0. Mobile affected retest passes after the refresh fix. |
| Mobile 390×667 | Active 1667.5px, wrapper 2334.5px. Full portrait contained in a 328.3px artwork row, y218.7–547. Actions/skip remain within y555–651. Final frame 1.009925s before release. |
| Touch input | Trusted `Input.dispatchTouchEvent` start/move/end events scroll the real page. A 100px swipe moves 85px and holds greeting/frame 0. Repeated fast swipes reach visible bridge/final bonsai; upward swipes restore the greeting/first decoded frame. No trap. |
| Small/landscape | 320×700 active1750px;834×390 active975px. No horizontal overflow; landscape artwork remains fully contained. |
| Enlarged text | 200% CSS text-size simulation at 320px disables holding/runway and uses readable ordinary flow without horizontal overflow. Native text zoom remains a release check. |
| Reduced motion/error | Reduced motion makes no MP4 request and has no extended runway. Runtime preference changes reset typed greeting correctly. Blocked video yields the original final-frame still, ordinary flow and usable actions. |
| Navigation/access | Native menu and approach link work; anchor target is visible/focused; links retain visible keyboard focus and 44px targets. Stable semantic h1 and decorative typing are preserved. No browser exceptions in tested states. |

Screenshots were inspected for desktop opening and mobile final composition: original sculpture/bonsai remains central, complete and unobscured; black/gold and editorial typography are preserved. No unrelated artwork was introduced.

### Performance, checks and limits

- Existing coalesced rAF/exact seeks, in-flight backpressure, readiness/visibility gates and per-effect cleanup remain. Scrub smoothing actually drives the timeline that supplies video targets. No per-frame React state and no added dependencies or media re-encoding.
- Local desktop diagnostic sample from the revised scene: LCP 688ms, CLS 0.000892. One 132,425-byte original MP4 and the same three local fonts were observed. These are local readings, not field Core Web Vitals or a benchmark comparison. Earlier trace limitations still apply.
- Final `npm.cmd run typecheck`, `npm.cmd run lint` and `npm.cmd run build` pass. Build includes TypeScript and static root/not-found generation. Earlier transient lint/type errors were corrected before final validation.
- Original reference working tree remains clean. Copied and original MP4 SHA-256 both remain `220C78FB30E11B79BF5422C0BDF51B15C3AF8BB6B3D1A763C41C7B1E8EE4CCF5`. No hosting/DNS or source changes.
- **Unverified:** physical-device inertial touch scrolling and Safari/iOS. Chrome's synthetic touch-scroll gesture API produced no movement; direct trusted touch dispatch worked, but post-release samples did not establish OS-generated fling momentum. No native momentum pass is claimed. Native text resizing and field performance also remain release validation items.

Milestone 2.1 stops at the corrected hero. Milestone 3 remains unstarted.

## Milestone 3 — implementation checks only

2026-11-16. **No QA agent, full browser suite, accessibility audit or performance audit was run.** Earlier milestone records above are historical; Milestone 4 release review is still pending.

- Implementer ran standalone TypeScript and ESLint (zero errors/warnings), and a successful production build including the five statically generated project pages. The targeted case-layout adjustment received its own affected checks.
- HTTP development checks: all nine page URLs return 200 with unique titles/descriptions, the expected canonical and noindex/nofollow; unknown case returns 404. Sitemap contains the nine URLs, robots disallows crawling by default, and the social-preview image returns PNG.
- Limited rendered checks: desktop homepage section order/featured image; mobile iLab heading, primary/portrait image and internal links; mobile contact form. The inspected pages have one h1/main, a footer outside main, loaded images and no horizontal overflow or browser exceptions. This is not a full responsive or accessibility pass.
- Empty inquiry fields block draft preparation. Synthetic test values produce an encoded mailto intent and readable fallback draft, without an HTTP POST or a sent confirmation. Simulated clipboard denial focuses/selects the draft for manual copying. No email was sent, and the system clipboard was not changed. Actual mail-client delivery remains unverified.
- Missing result arrays produce no public metric section. No sample analytics/testimonials were added. Public source capture/research did not enter client accounts, orders or private administration.
- Original reference working tree remains clean and the canonical hero hash is unchanged. No production hosting/DNS, deployments, analytics or delivery-provider changes.
- One headless mobile capture omitted header paint despite visible computed styles, correct geometry and top hit testing. A repaint restored it; a real CDP pointer click opened the menu and captured the brand/menu correctly at scroll zero. This suggests a headless capture/compositor discrepancy, but physical-browser first-paint verification remains a Milestone 4 check. No speculative application fix was made.

Carry forward the earlier Safari/device/zoom/field-performance limits plus full-page composition, keyboard/screen-reader flows, contrast, client navigation, social preview appearance, privacy/provider decisions and final indexing/redirect checks to Milestone 4. Milestone 3 completion is not a release approval.

## Milestone 3.5 rollback verification

The rejected refinement was reverted using recorded pre-edit source and guarded inverse changes after a verified backup. Seven restored application files match the recovered baseline exactly; both added components are absent. Hero/controller/CSS/video and project data retain their earlier hashes, and 49 unrelated backed-up files are unchanged.

All nine page routes return 200; unknown-case 404, sitemap, robots and social image responses pass. Focused rendered checks confirm the original homepage service rows/process, five-project Work index, eight-section iLab layout, six Services sections/process and original contact note/native validation. No inspected page has horizontal overflow, browser exceptions or remaining 3.5 components. TypeScript, lint and production build pass, including all 14 outputs. This is rollback verification only; no QA agent, redesign, full audit or Milestone 4 work was performed. Hero timing approval remains open.

## Homepage Phase 1 — focused hero implementation checks

No QA agent, full browser suite, accessibility/performance audit or Milestone 4 review. Designer specified the direction using the three requested installed design skills and original decoded artwork; Implementer authored hero TSX/CSS. Orchestrator used the existing Chrome/CDP utility for the checks and final screenshot inspection. The attempted second Designer screenshot review reached its agent usage limit; it is not reported as completed.

- Captured opening, early scroll, breakup, complete bonsai, final typed message and natural release at 1440×900 and 390×844. Opening media-frame heights are approximately 1313px/681px; final heights 860px/505px. Foliage, inner pot and sculpture base fit at the final hold. Navigation, copy and controls remain outside the artwork clip.
- Active travel is 3600px desktop and 2110px mobile at those viewports (400svh/250svh); the viewport-height sticky stage is additional. Native wheel input moves 120px and reverses to zero. Reversal restores the opening headline/frame; release brings the unchanged next section into ordinary view.
- Intermediate final typing observed: empty at72%, “Mak” at74.5%, “Make th” at78%, “Make them” at81%, complete two-line final text at85%. Title height stays174px desktop /82.67px mobile throughout the held stages; there is no static final-headline crossfade or per-scroll React state update.
- Rapid alternating inputs settle to the latest requested final frame (1.009925s), with no seek left in flight. Observed local maximum completed seek-event latency was129ms desktop /48ms mobile; these are diagnostic samples, not field performance or an INP audit. Original AVC1 is132425bytes,480×720,68 samples at67fps, with one initial sync sample; original SHA-256 remains unchanged. No media re-encoding or dependencies added.
- Arrow is keyboard reachable and Enter navigates/focuses `#approach`. No visible skip wording remains. Reduced motion requests no MP4, has no runway, shows the complete final poster and disables arrow motion. Blocking the MP4 yields the same static artwork and normal flow. Normal320px, short390×667, tablet768×1024 and short1440×600 layouts were sampled. The oversized-text guard triggers ordinary flow; whole-page enlargement still requires native zoom validation and lower-section issues are outside this phase.
- No browser exceptions in the sampled normal desktop/mobile runs. Shared Header and lower fallback source are unchanged;55 unrelated files match the checkpoint backup. TypeScript, lint and production build pass, with all14 static/SSG outputs generated. Local preview is restored for user review.

The original low-resolution film becomes visibly softer at close-up scale. Physical-device/Safari behavior and final subjective pacing remain open. Captures and observations are in the Git-ignored `.taste-skill/homepage-hero-phase1/` folder. This is an implemented iteration awaiting user approval, not final hero or release approval.

## Targeted hero follow-up — 2026-11-20

Focused orchestrator checks only; no QA agent, full audit or Milestone 4 review. The selected non-vignetted original and matching posters were visually compared against the previous sequence. Desktop 1440×900 and mobile 390×844 captures cover opening, breakup, beginning of final typing, ascent and completed bonsai. Scale remains constant; movement begins with final typing at 72%; final canopy clearance is approximately 24px / 12px at native release. Forward/reverse, rapid seeking, wheel scrolling, resize, reduced motion and blocked-video fallback passed; no console errors or horizontal overflow in these samples. A desktop capture paint anomaly did not recur in a fresh-page typing check; the verified capture replaces it.

TypeScript, repository lint and production build passed, generating all 14 static/SSG outputs. Header and lower fallback source match the pre-pass backup, and no other application sections changed. Review files and measurements are Git-ignored in `.taste-skill/hero-targeted-2026-11-20/`. Native-source softness/background texture, physical-device behavior and subjective final approval remain open; no release approval is implied.

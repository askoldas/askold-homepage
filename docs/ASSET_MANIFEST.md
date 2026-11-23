# Askold — source asset manifest

Updated: 2026-11-15. Paths below are relative to the read-only `../askold-cv-reference` unless a destination is explicitly given. Inventory comes from actual source reads and file sizes; availability does not establish permission, current project scope or endorsements.

## Owner-supplied Numoscape and Dexicon — 23 November 2026

The owner requested two additional cases and publication of four supplied screenshots. The copied assets use descriptive names; the Downloads originals remain unchanged. All four JPEGs have no EXIF metadata. Preserve the original pixels and interface text, using responsive rendering rather than generated imagery or edited mockups.

| Destination under `public/media/work/` | Owner-supplied Downloads source | Native size / bytes |
| --- | --- | --- |
| `numoscape-personal-reading.jpg` | `WhatsApp Image 2026-11-23 at 15.20.29.jpeg` | 1558×863 / 186,416 |
| `numoscape-homepage.jpg` | `WhatsApp Image 2026-11-23 at 15.20.51.jpeg` | 322×1600 / 81,299 |
| `dexicon-homepage-design.jpg` | `WhatsApp Image 2026-11-23 at 15.21.05.jpeg` | 612×1600 / 111,346 |
| `numoscape-account-access.jpg` | `WhatsApp Image 2026-11-23 at 15.22.02.jpeg` | 1527×867 / 126,375 |

Numoscape's owner-confirmed scope is a numerology platform with multiple calculations and payment integration. The screenshots show personal reading, date input, forecast/year-map/compatibility navigation, the wider homepage and account access before purchase. They do not establish a payment provider, technical stack, live transaction correctness, scientific validity or commercial results. No exact current pricing or live URL is asserted. The tall 322px homepage is supporting evidence at native-or-smaller width, not a full-width hero.

Dexicon is a simple business-presentation website design, with **design-only** attribution. Its supplied artwork reads DEXICONN; the portfolio uses the owner's requested project name Dexicon. The blue/gold layout and information hierarchy are visible design evidence. Client-site logos, financing language and company details are not claims that Askold built financial integrations, designed those brands or worked directly with the depicted device manufacturers. The full 612px-wide screenshot remains available in the case; any introductory preview uses CSS framing without changing the source image. No project URL, development work or results were supplied.

## Owner-supplied RubinRub dashboard — 23 November 2026

The owner confirmed building RubinRub's internal dashboard for expense and purchase tracking, stock management and dish calculations, and supplied two screenshots for the case study. Copy the original JPEGs under descriptive project filenames; leave the Downloads originals unchanged. These are additional owner-supplied assets, not reference-repository material.

| Destination | Owner-supplied source | Visible content |
| --- | --- | --- |
| `public/media/work/rubinrub-dashboard-login.jpg` | `C:/Users/info/Downloads/WhatsApp Image 2026-11-23 at 15.20.51 (1).jpeg` | 1600×723, 30,693 bytes; RubinRub dashboard sign-in screen with empty fields |
| `public/media/work/rubinrub-dashboard-dishes.jpg` | `C:/Users/info/Downloads/WhatsApp Image 2026-11-23 at 15.20.52.jpeg` | 1600×955, 91,834 bytes; internal dish-management interface with categories and menu prices |

The interface shows no entered credentials, customer records or expense totals. The user explicitly requests publication of these images. Preserve the screenshots uncropped with English descriptions; distinguish the visible dish list from the broader owner-confirmed operations scope. No dashboard technology, permission model, integration, measured business outcome or working cost formula is inferred from the images. Existing RubinRub website, booking, menu, promotional imagery and film remain intact; the project continues to build on the café's existing identity.

## Owner-supplied iLab reporting evidence — 23 November 2026

The owner supplied and requested public use of these aggregate screenshots. These two sources are local Downloads files, not reference-repository assets. Original JPEGs are copied unchanged; no crop, generated replacement or re-encoding. Neither source contains an EXIF marker or visible account/customer identifiers. Next.js image rendering retains responsive delivery with the original available through a full-size link.

| Destination | Owner-supplied source | Dimensions / bytes | Use |
| --- | --- | --- | --- |
| `public/media/evidence/ilab-search-console-october-comparison.jpg` | `C:/Users/info/Downloads/WhatsApp Image 2026-11-23 at 14.12.07.jpeg` | 1030×233 / 52,611 | iLab year-over-year search-performance evidence; compact SEO example on Services |
| `public/media/evidence/ilab-analytics-overview.jpg` | `C:/Users/info/Downloads/WhatsApp Image 2026-11-23 at 13.22.35.jpeg` | 1010×535 / 66,324 | iLab broader website-activity chart |

Search Console explicitly compares 1–31 October 2026 with 1–31 October 2025. The Analytics chart shows year-to-date/previous-period labels without an exact year, cutoff or channel filter. English captions preserve the visible rounded units and distinguish search performance from broader activity; no precise derived growth, conversion or causal SEO claim is added. Publication context and outstanding reporting details are recorded in `ANALYTICS_REQUIREMENTS.md`. All pre-existing artwork and project images remain unchanged.

## Canonical signature

| Source | Bytes | Verified metadata / use |
| --- | ---: | --- |
| `public/intro.mp4` | 132,425 | AVC1, 480×720, MP4 movie duration 1.015s; canonical hero clip |
| `public/intro-orig.mp4` | 169,824 | AVC1, 480×720, 1.015s; comparison source only |
| `public/intro-marble.mp4` | 174,202 | AVC1, 480×720, 1.015s; comparison source only |
| `public/intro-old.mp4` | 174,429 | Historical alternative; not selected |
| `public/bonsai.mp4` | 2,553,786 | AVC1, 480×480, 7.034s; separate asset, not automatically the hero sequence |

Canonical SHA-256: `220C78FB30E11B79BF5422C0BDF51B15C3AF8BB6B3D1A763C41C7B1E8EE4CCF5`.

MP4 metadata was initially read directly from container headers using a read-only Node parser. Later hero passes decoded frames in Chrome and inspected actual seeking; see the selection update below. Do not treat the reference code's 2-second seek constant as the actual media duration.

### Non-vignetted hero selection — 2026-11-20

The current hero uses an unchanged copy of `public/intro-orig.mp4` at destination `public/media/hero/intro-original.mp4`, superseding the vignetted `intro.mp4` selection above. Verified: 169,824 bytes, AVC1, 480×720, 1.014925s, 68 samples at 67fps, one sync sample (frame 1). SHA-256: `f2269f983683b6c67b61b24f27734d6a5531decdf879d817a3c901f333fd0d86`. It is not an all-I-frame encode; the existing readiness-gated, coalesced exact seek mechanism is retained.

Chrome-decoded initial, middle and final frames confirm the same left-facing sculpture, breakup and bonsai reveal as `intro.mp4`, without its vignette. `intro-marble.mp4` and `intro-old.mp4` are right-facing variants with additional markings and are not selected. The original non-vignetted background retains its authored texture; no artificial frame, mask, gradient or image filter is applied.

Both existing fallback posters were regenerated from the selected clip at 0.005s and duration minus 0.005s, at native 480×720, using unfiltered WebP quality 0.94: `sculpture-poster.webp` 35,426 bytes and `bonsai-poster.webp` 38,402 bytes. Original files in the reference repository remain untouched. Decoded comparison frames are local, Git-ignored review evidence under `.taste-skill/hero-targeted-2026-11-20/`.

### Mobile reverse-playback derivative

Owner-approved `public/media/hero/intro-reverse.mp4` reverses all 68 frames of the copied non-vignetted original, without resizing or changing the artwork. H.264/yuv420p, 480×720, 67fps, approximately 1.015 seconds, 481,661 bytes; SHA-256 `b359f492a9fc2b8f9517424ec803eae6e93f37a2fb038b0495222580506a22dd`. This is a high-quality re-encode for native reverse-direction playback, not a byte-identical copy. Offline FFmpeg comparison with a decoded reversal of the original measured average PSNR 49.346477 dB; this does not establish rendered phone performance. The original's SHA-256 remains unchanged. Only motion-enabled mobile mounts/preloads the reverse clip; desktop continues using the unchanged original.

Reproduction command (FFmpeg executable can be supplied from the isolated ignored tools folder):

```sh
ffmpeg -hide_banner -loglevel error -i public/media/hero/intro-original.mp4 -vf reverse -an -c:v libx264 -preset slow -crf 12 -pix_fmt yuv420p -r 67 -movflags +faststart public/media/hero/intro-reverse.mp4
```

## Hero implementation inventory

- `src/components/hero/HeroSection.tsx`: GSAP ScrollTrigger, original `intro.mp4`, intro/outro refs, 50ms-per-character opening type effect and responsive viewport variable handler.
- `HeroHeadline.tsx`: two-line headline and cursor; Inter supporting line / Cormorant gold display line.
- `HeroContentBlock.tsx`: supporting copy and CTA buttons unlocking hidden page content and scrolling to section refs.
- `HeroSection.module.scss`: 205vh section, sticky 100vh stage, desktop side-by-side layout; at ≤640px the clip becomes a full-screen background with a scrim.
- Video trigger: `top top` → `bottom top`, `currentTime = 2 * progress` when `readyState >= 2`. Headline transitions: hold to 10%, delete at 10–20%, type replacement at 20–30%. Intro fades over the first 30%; outro fades at 32–50%.
- Timing inference: a 205vh wrapper with a 100vh sticky stage holds for 105vh; at release the trigger is about 51.2% complete and requests 1.024s playback, close to the 1.015s container duration. The 2-second code range may therefore be intentional pacing compensation. Verify visually before changing it.
- Headline trigger is killed; fade/video effects lack equivalent scoped cleanup. No reduced-motion branch, verified poster, error state or seek coalescing was found. Only one effect uses the viewport variable while CSS still relies on `vh`.
- Direct dependencies: React hooks, GSAP/ScrollTrigger and local styles/headline/content. Root `src/app/page.tsx` controls hidden content, section refs and project modals. Preserve artwork and scroll fidelity; replace the hidden-content dependency and lifecycle gaps.

## Other motion and static artwork

| Source | Bytes | Disposition |
| --- | ---: | --- |
| `public/capital.mp4` / `capital-orig.mp4` | 2,794,247 / 2,886,811 | Sculpture alternatives; defer |
| `public/explode.mp4` / `rocks.mp4` | 980,980 / 2,790,892 | Related motion; defer |
| `public/tablet.mp4` | 352,400 | Related visual; defer |
| `public/header-bg.mp4` / `header-bg_vignetted.mp4` | 10,267,977 / 1,351,404 | Background alternatives; no additional loop selected |
| `public/amphora.png` | 754,639 | Static artwork; optional after visual fit check |
| `public/column.png` / `columnn.png` | 1,266,223 / 2,651,760 | Static sculpture alternatives |
| `public/columnn-black-bg.jpg` | 62,441 | Candidate static art; not a verified video poster |
| `public/columntree.png` | 2,832,468 | Visually inspected: tree on classical column with colored background; related artwork, not a verified clip frame |
| `public/menu-poster.jpeg` | 20,106 | Existing menu artwork; not selected for new navigation |
| `public/as-logo.svg` | 2,157 | Original Askold brand asset |
| `public/CV.pdf` | 534,119 | Existing CV; review currency and personal information before public reuse |

`FeaturedVideo.tsx` is a reusable source reference for scroll reveals, but it also autoplays loops and does not provide reduced-motion handling; do not copy it unchanged. `HeaderBackground.tsx` is another background-loop reference. Scaffold SVGs (`next`, `file`, `globe`, `window`) are not brand assets and are excluded.

## Project collections

91 image files, 33,471,771 bytes total (~31.9 MiB), across these six directories. Source descriptions are portfolio claims, not independently verified outcomes.

| Directory under `public/projects/` | Files | Bytes | Representative assets / evidence |
| --- | ---: | ---: | --- |
| `fixmobile/` | 19 | 8,005,921 | `before.jpg`, `after.jpg`, `laptop-content.png`, `product-page.jpg`, logo/print images; source describes identity and custom shop work |
| `masterbean/` | 14 | 12,216,215 | `webpage.png`, `packages.png`, `bags.png`, logo/packaging images; source describes branding and WooCommerce |
| `rubinrub/` | 10 | 4,061,050 | `web.png`, `booking.jpg`, `interior.jpg`, `edenkarte.jpg`; source describes WordPress and promotional visuals |
| `stefanel/` | 16 | 3,738,112 | `intro-banner.jpg`, hang/display/print imagery; merchandising and print, not a web-development case |
| `btx/` | 24 | 3,356,516 | `beforeL.jpg`, `afterL.jpg`, `eshop.jpg`, product/identity images; source describes OpenCart work |
| `quill/` | 8 | 2,093,957 | `Home.jpg`, `About-us.jpg`, `Services.jpg`, `orderform.jpg`; source describes custom content ordering |

Videos under `public/videos/`:

| File | Bytes |
| --- | ---: |
| `fixmobile.mp4` | 107,668 |
| `masterbean.mp4` | 718,741 |
| `Rubenrub.mp4` | 501,111 |
| `stefanel.mp4` | 437,097 |
| `btx.mp4` | 273,030 |
| `seoquill.mp4` | 2,652,790 |
| `seoquill-alt.mp4` | 205,591 |

Exact capitalization/spelling matters on Linux: the source title RubinRub maps to directory `rubinrub`, while the video is `Rubenrub.mp4`. `Home.jpg`, `About-us.jpg`, `Services.jpg`, `Product-1.png` etc. must not be silently lowercased.

`public/logos/` has 40 top-level SVG files including six project logos (`fixmobile`, `masterbean`, `rubinrub`, `stefanel`, `btx`, `seo-quill-logo`) and tool/platform marks. Nested `New folder/SVG/` contains WhatsApp, Telegram and phone icons. Tool logos are not client endorsements; avoid carrying a large software-logo wall into the commercial site.

## iLab media and evidence gap

No iLab-specific media or project entry was found in the reference. Do not relabel FixMobile as iLab. Live [service](https://ilab.lv) and [shop](https://ilab.lv/shop) content was retrieved on 2026-11-15, but authentic page screenshots have not yet been captured or added.

Useful publicly observed media sources include [service hero](https://ilab.lv/images/home/home-hero-repair.webp) and the shop hero referenced at `/shop/images/shop-hero.png`; these are discovery pointers, not downloaded/published assets. Milestone 3 should create intentional desktop/mobile captures of the actual interfaces, record capture date/URL/viewport and confirm publication scope. Never use private account, customer, order or admin screens without explicit approved redaction.

## Foundation copies and later optimization

Only required preservation assets are copied now:

| Destination in this repository | Source | Handling |
| --- | --- | --- |
| `public/media/hero/intro.mp4` | `public/intro.mp4` | Byte-for-byte canonical copy; not loaded by foundation page |
| `public/brand/as-logo.svg` | `public/as-logo.svg` | Byte-for-byte copy; available for later nav |

Do not mass-copy historical videos or whole project galleries. Copy selected case media during implementation, preserve originals and generate optimized derivatives only here. The 480×720 source may soften when enlarged. No replacement or AI recreation is authorized by this manifest.

### Milestone 2 verification and derivatives

The copied MP4 is now used by the hero and still matches the canonical SHA-256. Actual browser decoding verified 480×720, duration 1.014925s, intact marble → breakup → bonsai. Container tables contain 68 samples at 256 ticks with timescale 17152 (67fps), and one sync frame. Browser `currentTime` seeking was tested forward/reverse; no video re-encode was required.

| New destination | Bytes | Derivation |
| --- | ---: | --- |
| `public/media/hero/sculpture-poster.webp` | 107,724 | Original decoded frame at 0s; normal/no-JS opening |
| `public/media/hero/bonsai-poster.webp` | 150,860 | Original decoded frame at 1.009925s; reduced-motion/error fallback |

Both are 480×720 lossless WebP encodings. Decoded RGBA buffers were compared against the extracted PNG frames and are identical. Temporary PNGs are not shipped. The film itself remains 132,425 bytes and unmodified. No standalone tree/column image or generated artwork was substituted. The copied SVG is retained; this milestone uses a typographic Askold header wordmark.

Typography source: reference `src/app/layout.tsx` uses Inter and Cormorant Garamond from Google with weights 400/500/600. Foundation uses corresponding local Fontsource packages and included font licenses, not copied browser caches.

## Contact integration

Verified in `src/components/sections/ContactSection.tsx`: `makrikovas@gmail.com`, `+371 28878495`, `https://wa.me/37128878495`, `https://t.me/Askoldas`. `src/app/contact/ContactForm.tsx` only clears fields after a timeout; there is no fetch/API/mail provider in that form. A reference to Firebase in a project description is not a contact integration. The foundation may use the existing native mailto link; a future form needs a real provider and delivery checks.

## Milestone 3 — selected authentic project media

Captured on 2026-11-16 with the installed Chrome/CDP helper. Desktop viewport: 1440×1000, device scale 1. Mobile viewport: 390×844, device scale 2 (780×1688 image). Public pages only; no login, private administration, customer or account screens. Consent banner rejection was used where available. Screenshots preserve the real interface, including its own business claims; those claims are not Askold website-performance results.

All destinations below are under `public/media/work/`. Raw capture PNGs stay in the ignored local working folder. WebP derivatives use quality 86; no fabricated screens or new device mockups were generated.

| Destination | Source / view | Image dimensions |
| --- | --- | --- |
| `ilab-desktop.webp` | https://ilab.lv/ — opening | 1440×1000 |
| `ilab-mobile.webp` | https://ilab.lv/ — mobile opening | 780×1688 |
| `ilab-service.webp` | https://ilab.lv/iphone-remonts — service page | 1440×1000 |
| `ilab-shop.webp` | https://ilab.lv/shop — shop opening | 1440×1000 |
| `ilab-shop-finder.webp` | https://ilab.lv/shop — `#part-finder` | 1440×1000 |
| `frio-desktop.webp` | https://frioestrella.com/ — opening | 1440×1000 |
| `frio-mobile.webp` | https://frioestrella.com/ — mobile opening | 780×1688 |
| `frio-calculator.webp` | https://frioestrella.com/ — estimate calculator section | 1440×1000 |
| `latvir-desktop.webp` | https://www.latvir.lv/ — opening | 1440×1000 |
| `latvir-mobile.webp` | https://www.latvir.lv/ — mobile opening | 780×1688 |
| `fixmobile-overview.webp` | Reference `public/projects/fixmobile/webpage.jpg`; existing authored project composition, resized | 1600×1600 |
| `fixmobile-product.webp` | Reference `public/projects/fixmobile/product-page.jpg`; resized | 1600×608 |
| `seoquill-overview.webp` | Reference `public/projects/quill/Home.jpg` | 600×2314 |
| `seoquill-cover.webp` | Same original homepage, top 600×500 crop for project previews | 600×500 |
| `seoquill-order.webp` | Reference `public/projects/quill/orderform.jpg`; resized | 1600×2436 |

Explorer confirmed no accessible sibling iLab source repository: only the two Askold repositories exist in the bounded parent inventory. The new iLab material closes the earlier public-screenshot gap; implementation/transaction claims remain limited to owner-supplied scope and observed public functionality. Source files were read without modification. No additional project video loops, stock imagery, portrait, client endorsements or tool-logo wall were introduced.

## Homepage Phase 2 — selected original archive assets

The following additions supersede the earlier deferral of archive videos and standalone artwork for this scoped phase. All source paths below are relative to the read-only `../askold-cv-reference/`. Original MP4 and SVG files were copied byte-for-byte; raster derivatives were produced here as quality-90 WebP, retaining authentic artwork. No generated screens or new device mockups. iLab's homepage composition reuses the existing `ilab-desktop.webp` and `ilab-shop.webp` captures above.

| Destination under `public/media/work/` | Original source | Dimensions |
| --- | --- | --- |
| `masterbean-cover.webp` | `public/projects/masterbean/webpage.png`, top crop | 1039×780 |
| `masterbean-overview.webp` | Same source, complete image | 1039×2441 |
| `masterbean-bags.webp` | `public/projects/masterbean/bags.png` | 1536×1024 |
| `masterbean-packages.webp` | `public/projects/masterbean/packages.png` | 1536×1024 |
| `rubinrub-cover.webp` | `public/projects/rubinrub/web.png` | 1200×1321 |
| `rubinrub-booking.webp` | `public/projects/rubinrub/booking.jpg` | 960×688 |
| `rubinrub-menu.webp` | `public/projects/rubinrub/edenkarte.jpg` | 1200×1312 |
| `btx-outlet-cover.webp` | `public/projects/btx/cover.jpg` | 1400×639 |
| `btx-outlet-shop.webp` | `public/projects/btx/eshop.jpg` | 1425×880 |
| `btx-outlet-product.webp` | `public/projects/btx/Product-1.png` | 700×580 |
| `stefanel-riga-cover.webp` | `public/projects/stefanel/intro-banner.jpg`, resized | 1600×1060 |
| `stefanel-riga-merchandising.webp` | `public/projects/stefanel/hang-2.jpg` | 1200×891 |
| `stefanel-riga-print.webp` | `public/projects/stefanel/frames.jpg` | 1200×669 |

| Destination under `public/media/art/` | Original source / derivation | Metadata |
| --- | --- | --- |
| `bonsai.mp4` | `public/bonsai.mp4` | 480×480, 7.033333s, 2,553,786 bytes |
| `bonsai-poster.webp` | Decoded original frame at 0.04s | 480×480, 40,380 bytes |
| `capital.mp4` | `public/capital.mp4` | 480×480, 7.866667s, 2,794,247 bytes |
| `capital-poster.webp` | Decoded original frame at 3.9333335s | 480×480, 28,208 bytes |

Actual decoded frames were inspected before composition. `capital-orig.mp4` was inspected but not copied or used. Videos retain their original encoding and full square canvas; the original homepage sculpture assets are unchanged. Bonsai SHA-256: `13d83157a5eaa89c0b37e2c1f7421af7254386741cbd946d1a57fd53df2d4d01`; capital: `5e750403d98f766bb0735a3c8c7948e73e520f24c2f065242706892d9669a4d1`.

| Prefix under `public/media/projects/` | Original film / logo | Film bytes / poster bytes |
| --- | --- | ---: |
| `masterbean` | `public/videos/masterbean.mp4` / `public/logos/masterbean.svg` | 718,741 / 95,810 |
| `rubinrub` | `public/videos/Rubenrub.mp4` / `public/logos/rubinrub.svg` | 501,111 / 67,060 |
| `btx-outlet` | `public/videos/btx.mp4` / `public/logos/btx.svg` | 273,030 / 61,938 |
| `stefanel-riga` | `public/videos/stefanel.mp4` / `public/logos/stefanel.svg` | 437,097 / 61,644 |

Each prefix has `-intro.mp4`, `-intro-poster.webp` and `-logo.svg`. All four films are 854×480 and 2.933333s; matching posters use the decoded frame at 2.6399997s, quality 94. Original logos are overlaid as in the source portfolio. These films contain coffee, food and clothing footage; they are not website recordings, and the site does not claim the footage was client-produced. Original marks remain intact. Playback is manual on the four archive case pages, muted, inline and paused offscreen; no archive films load in the carousel or on newer project cases.

Source descriptions: original `src/data/portfolio.ts`. Project scope was paraphrased without adding business outcomes or present-day stack verification. Stefanel is categorized as retail/creative work. Local source/copy hashes, decoding metadata and preview evidence are retained in Git-ignored `.taste-skill/phase2/`; screenshots are not committed.

### Supplied favicon set — 2026-11-21

Source: user-supplied `C:/Users/info/Downloads/askold-me-favicons.zip`. Reused the authentic gold/black `.ME` monogram; no new artwork or transformations. Selected entries were copied individually: `icon.svg`, `favicon.ico` and `apple-icon.png` into `src/app/`; `android-chrome-192x192.png`, `android-chrome-512x512.png`, `maskable-icon-512x512.png` and `site.webmanifest` into `public/`. App Router supplies icon links; root metadata references `/site.webmanifest`. Unused alternate sizes and the archive README are not shipped. Archive documentation was treated as contextual material, not an instruction source.

## About profile — CV source verification

Source: reference `public/CV.pdf`, 534,119 bytes, two pages, internal modification dates June 2025. Both pages were rendered locally with Windows' native PDF renderer and inspected in full; embedded Unicode text was also extracted. This was document inspection, not a website browser audit. Professional/contact information comprises the already-public email, phone, website and Riga location; no birth date, private residential address or confidential client details were found. The downloadable destination is `public/CV.pdf`, an unchanged copy; do not describe it as newly updated for 2026.

| Role in the provided CV | Organization / arrangement | Dates |
| --- | --- | --- |
| Freelance Web Developer & Brand/UI Designer | Remote / Self-Employed | 2015–Present |
| Web Developer | Create and Scribe EO, Riga | 2024–2025 |
| Client Onboarding & Customer Support Specialist | Nets Denmark A/S Lietuvos filialas, Remote / Vilnius | 2021–2023 |
| Web Content & Marketing Assistant | Litada, Riga | 2019–2020 |
| Business & Digital Operations Manager | BalticTex SIA, Riga | 2008–2018 |

Responsibilities support responsive websites/CMS, branding, UI/UX, React/Next.js, Airtable workflow tooling, payment-platform onboarding and AML screening, marketing content, operations and stock-management tooling. Nets experience is onboarding/support, not payment-platform engineering. Preserve overlapping dates as recorded; do not invent employment changes or quantitative achievements.

Education/training: Front-End Developer Program, TeachMeSkills (online, 2023–2024); Advanced HTML & CSS, WebCode Academy (online, 2018); Bachelor’s in Chemical Engineering, Klaipeda University (Lithuania, 2001–2005); Corporate Administration, KVK (Lithuania, 1999–2001). The KVK qualification level is unspecified and must not be promoted to a degree or certificate.

Russian, English and Lithuanian are listed in both the CV and original ContactSection; neither source supplies proficiency levels. Do not infer Latvian fluency. The original AboutSection and `src/data/steps.ts` corroborate the design/development practice and tool categories but contain no conflicting career chronology or qualifications. The PDF repeats one personal-strength entry; the new profile should not repeat it. “Present” and document currency are not a fresh external employment verification. Existing source claims are used as owner-provided profile information, not independently certified credentials.

## Portfolio content completeness pass — 2026-11-21

Compared all nine current cases with the six original `src/data/portfolio.ts` descriptions and existing owner-supplied/public-site evidence. This is a source-content review, not a browser or functional audit.

| Project | Finding / change |
| --- | --- |
| FixMobile | Identity work was underrepresented. Added logo evolution, campaigns, shop display, business cards and jersey applications; restored documented Next.js/Firebase, product/order administration, product database and tailored imagery scope. |
| MasterBean | Branding, packaging and WooCommerce scope already covered; added the original logo alongside packaging. |
| BTX Outlet | Logo redesign, photography and OpenCart already covered; added original before/after marks. |
| SeoQuill | Brand identity, product concept and custom ordering already described; added the original wordmark. |
| RubinRub | Existing-brand translation, WordPress and promotional visuals already covered; retained current content. |
| Stefanel Riga | Retail merchandising, displays and print/digital marketing already covered; retained creative/retail positioning. |
| FRIO ESTRELLA | Added the AI chatbot confirmed by the owner in this brief, alongside existing service/calculator/contact scope. No provider or performance claims. |
| LATVIR | Added the owner-confirmed AI chatbot alongside service information and direct contact. No booking, availability or effectiveness claims. |
| iLab | Made existing SEO/optimization work explicit and added two owner-requested Analytics screenshot placeholders. No figures or fabricated charts. |

Originals below were visually inspected before use. Sources are relative to reference `public/projects/`; destinations are under this repository's `public/media/work/`. Derived WebPs use quality 90, maximum width 1600, no cropping or upscaling. Total: 11 files, 844,944 bytes. Originals remain unchanged.

| Destination | Original | Dimensions |
| --- | --- | --- |
| `fixmobile-logo-before.webp` | `fixmobile/before.jpg` | 758×350 |
| `fixmobile-logo-after.webp` | `fixmobile/after.jpg` | 758×350 |
| `fixmobile-logo-showcase.webp` | `fixmobile/logo-showcase-1.jpg` | 768×512 |
| `fixmobile-campaign.webp` | `fixmobile/banner-stundas.jpg` | 1600×1000 |
| `fixmobile-shop-display.webp` | `fixmobile/Indoor-Stand.jpg` | 960×960 |
| `fixmobile-business-cards.webp` | `fixmobile/bcard.jpg` | 1338×1338 |
| `fixmobile-jersey.webp` | `fixmobile/jersey.png` | 525×525 |
| `masterbean-logo.webp` | `masterbean/logo-1.jpg` | 768×512 |
| `btx-outlet-logo-before.webp` | `btx/beforeL.jpg` | 758×350 |
| `btx-outlet-logo-after.webp` | `btx/afterL.jpg` | 758×350 |
| `seoquill-logo.webp` | `quill/logo-sq.jpg` | 1024×1024 |

FixMobile `cards.jpg` depicts product cards; `bcard.jpg` is the verified business-card material. The jersey is an original brand-application presentation, not a claim of designing other manufacturers' or clubs' identities. Shared homepage covers/summaries/scopes remain unchanged; FixMobile has a case-only branding hero and retains its website overview later. No chatbot screenshots or Analytics reporting images have been supplied or invented.

## Archive media expansion and scroll-linked films

Inspected all 91 raster assets in the six original project folders, including RubinRub's AVIF food image. The expanded case presentation maps 27 originals to existing derivatives and adds 64 WebPs under `public/media/archive/<project>/` (6,622,548 bytes combined). New derivatives use quality 90, maximum width 1600, no crop and no upscaling. Original sources remain read-only. The runtime gallery groups and verified dimensions live in `src/content/project-archive.ts`; source hashes and the complete source/destination mapping are retained in Git-ignored `.taste-skill/archive-media-recovery/asset-map.json`.

| Source folder | Original images | Additional evidence |
| --- | ---: | --- |
| `fixmobile` | 19 | Logo/material variants, opening campaigns, print applications and interface screens |
| `masterbean` | 14 | Individual bags/packs, material and logo applications, website |
| `rubinrub` | 10 | Existing café identity, food/interior imagery, menu and booking interfaces |
| `stefanel` | 16 | Outdoor campaign placements, shop windows and merchandise displays |
| `btx` | 24 | Black Friday, seasonal campaigns, product imagery, retail and identity applications |
| `quill` | 8 | About/Services interfaces, ordering flow and original marks |

BTX `Black-Friday.jpg` becomes `public/media/archive/btx-outlet/black-friday.webp` (1200×628) and leads its case. Supporting archive galleries omit assets already presented in the main narrative rather than rendering every image twice. Caption wording identifies actual content without claiming that existing café/fashion identities or all source photography were newly created by Askold.

The four existing introduction films/logos/posters and the Work/Services artwork files are retained, without visible introduction captions or playback controls. The follow-up request replaces project-introduction scrubbing with one playback per viewport entry, holding the final frame and restarting after leaving/re-entering. The latest Work/Services request uses native looping playback while visible, independently of scroll. MP4 container inspection confirms H.264: four 854×480, 2.933-second introductions and two 480×480 artwork films of 7.033/7.867 seconds. Each has one sync sample; artwork metadata precedes media, while introduction metadata follows it. Files are not re-encoded. Actual rendered playback remains for manual review. No browser performance measurement is claimed.

## Services redesign — curated existing evidence

The Explorer checked the original `src/data/portfolio.ts` and original project folders, then visually inspected the existing derivatives. The Designer also inspected the clean MasterBean identity. The Services page reuses these files unchanged; no additional asset copying, generation or re-encoding is needed. Source paths below are relative to the read-only reference repository.

| Existing destination | Original source | Dimensions | Services role and supported scope |
| --- | --- | --- | --- |
| `public/media/work/fixmobile-business-cards.webp` | `public/projects/fixmobile/bcard.jpg` | 1338×1338 | Dominant printed identity application; original scope confirms identity across physical/digital touchpoints. This is the business-card material, not `cards.jpg` product cards. |
| `public/media/work/masterbean-logo.webp` | `public/projects/masterbean/logo-1.jpg` | 768×512 | Clean identity evidence; original scope confirms logo, identity and packaging work. |
| `public/media/work/seoquill-logo.webp` | `public/projects/quill/logo-sq.jpg` | 1024×1024 | Logo/identity evidence; original scope confirms identity and the product concept. |
| `public/media/archive/btx-outlet/black-friday.webp` | `public/projects/btx/Black-Friday.jpg` | 1200×628 | Digital campaign application; original scope confirms digital/print marketing work. |

MasterBean packaging remains verified work, but the inspected packaging compositions have unclear small printed copy and are excluded from this wall. No replacement packaging imagery is invented. RubinRub is not presented as newly created branding; its source describes work with an existing identity.

Small service-proof references reuse the existing authentic FRIO ESTRELLA website/calculator captures and SeoQuill ordering interface documented above. LATVIR and iLab may be linked as relevant cases without new screenshots or transactional claims. The original capital video and poster are preserved. No service proof implies measured SEO outcomes, private dashboards, checkout verification or new analytics evidence.

### Services evidence selection — owner follow-up

The owner replaces the mixed wall with a brand-grouped carousel for FixMobile, SeoQuill and MasterBean. FixMobile reuses its logo presentation, business cards and campaign material; SeoQuill reuses the main logo plus its vertical wordmark and alternate mark; MasterBean reuses the embossed logo, burlap identity and individual coffee-bag design. All assets already exist locally. The individual `bag-1.webp` was visually inspected and has clear package copy; it is distinct from the large packaging compositions excluded above. No replacement or generated assets are required.

Additional selected identity assets (sources relative to the read-only reference):

| Existing destination | Original source | Dimensions |
| --- | --- | --- |
| `public/media/archive/seoquill/logo-vert.webp` | `public/projects/quill/logo-vert.jpg` | 364×1024 |
| `public/media/archive/seoquill/seoquill-fav2.webp` | `public/projects/quill/seoquill-fav2.png` | 500×500 |
| `public/media/archive/masterbean/burlap.webp` | `public/projects/masterbean/burlap.jpg` | 960×640 |
| `public/media/archive/masterbean/bag-1.webp` | `public/projects/masterbean/bag-1.jpg` | 370×370 |

The service-proof mapping now uses iLab and FixMobile for web design; iLab and FRIO ESTRELLA's calculator for custom development; the iLab shop capture and MasterBean storefront for e-commerce; and SeoQuill ordering for web applications. Existing case descriptions verify these scopes, including MasterBean's WordPress/WooCommerce store. iLab's commerce example points to the parts shop at `https://ilab.lv/shop` and does not imply a tested checkout. BTX and LATVIR remain in their existing cases/archive but are no longer selected as Services evidence. Other pages and original media files are unchanged.

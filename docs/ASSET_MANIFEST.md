# Askold — source asset manifest

Updated: 2026-11-15. Paths below are relative to the read-only `../askold-cv-reference` unless a destination is explicitly given. Inventory comes from actual source reads and file sizes; availability does not establish permission, current project scope or endorsements.

## Canonical signature

| Source | Bytes | Verified metadata / use |
| --- | ---: | --- |
| `public/intro.mp4` | 132,425 | AVC1, 480×720, MP4 movie duration 1.015s; canonical hero clip |
| `public/intro-orig.mp4` | 169,824 | AVC1, 480×720, 1.015s; comparison source only |
| `public/intro-marble.mp4` | 174,202 | AVC1, 480×720, 1.015s; comparison source only |
| `public/intro-old.mp4` | 174,429 | Historical alternative; not selected |
| `public/bonsai.mp4` | 2,553,786 | AVC1, 480×480, 7.034s; separate asset, not automatically the hero sequence |

Canonical SHA-256: `220C78FB30E11B79BF5422C0BDF51B15C3AF8BB6B3D1A763C41C7B1E8EE4CCF5`.

MP4 metadata was read directly from container headers using a read-only Node parser; no ffprobe/frame decoder was available. It does not prove visual contents, frame rate, color profile or browser seek behavior. Milestone 2 must inspect decoded frames and the live scroll sequence. Do not treat the source code's 2-second seek constant as the actual media duration.

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

Do not mass-copy historical videos or whole project galleries. Copy selected case media during implementation, preserve originals and generate optimized derivatives only here. Extract poster/final frame from the canonical film after decoded inspection; verify any re-encode keeps frame order, color and seekability. The 480×720 source may soften when enlarged; assess fidelity before selecting a higher-resolution source. No replacement or AI recreation is authorized by this manifest.

Typography source: reference `src/app/layout.tsx` uses Inter and Cormorant Garamond from Google with weights 400/500/600. Foundation uses corresponding local Fontsource packages and included font licenses, not copied browser caches.

## Contact integration

Verified in `src/components/sections/ContactSection.tsx`: `makrikovas@gmail.com`, `+371 28878495`, `https://wa.me/37128878495`, `https://t.me/Askoldas`. `src/app/contact/ContactForm.tsx` only clears fields after a timeout; there is no fetch/API/mail provider in that form. A reference to Firebase in a project description is not a contact integration. The foundation may use the existing native mailto link; a future form needs a real provider and delivery checks.

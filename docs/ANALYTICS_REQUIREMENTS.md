# Analytics and project evidence

Updated: 2026-11-23. No analytics provider is configured in the new app. The owner supplied and authorized publication of two aggregate iLab reporting screenshots; no analytics accounts, APIs or transaction data were accessed. Actual screenshots replace the two case-study placeholders, without enabling tracking or publishing invented figures.

## Evidence status

| Topic | Available evidence | Still needed |
| --- | --- | --- |
| iLab service site | Public page at https://ilab.lv exposes Latvian repair services, price/contact links and service locations | Confirm Askold's exact role, dates, delivered scope and permission to publish relevant work |
| iLab shop | https://ilab.lv/shop exposes parts browsing, device/model/part selection, compatibility, product pages and inquiry/cart/account interfaces | Confirm implemented responsibilities and architecture; a visible interface does not prove a working payment/order/authentication flow |
| SEO work | Public content/service routes and an owner-supplied Search Console October year-over-year screenshot | Intervention/launch dates, property/filter context and exports for attribution or more precise claims |
| Reporting evidence | Owner-approved aggregate Search Console comparison and Google Analytics traffic overview | Exact Analytics cutoff/comparison dates and channel filters; no conversion, revenue or causal SEO claim is established |
| Other projects | Six project descriptions and supplied portfolio imagery in the reference | Current scope, display permissions and any approved outcomes; Stefanel is merchandising/print work |
| Contact | Source includes email, phone, WhatsApp and Telegram links; owner selected Resend | Configure server sender/recipient and verify live delivery before release |

Do not reuse iLab's own reviews, years of experience, delivery promises, catalog counts or service guarantees as proof of Askold's design performance. Public claims on iLab are its business content, not verified attribution to this project. Scraped account/cart markup is not a completed functional test.

## Request for later case-study production

Use approved aggregate exports or screenshots, not account passwords or raw customer data:

- GA4: property identity, date ranges/timezone, traffic/acquisition, landing pages and agreed conversion definitions; separate internal traffic/spam if known.
- Search Console: property identity, clicks, impressions, CTR and average position by date/page/query, country/device scope and indexing context. Redact sensitive queries where needed.
- Business outcomes: qualified inquiries, paid orders or revenue only if approved for publication, with definition, source and attribution limits.
- Delivery history: project launch/major-change dates, role, technology evidence, SEO actions and changes in campaigns/pricing/seasonality that could affect comparisons.
- For before/after comparisons use comparable durations, annotate confounders and explain absolute and relative differences. Never claim causation from a coincident traffic change.

## Optional result contract

The project model should allow results to be absent. A publishable result needs a value with unit, exact measurement definition, source reference, measurement period, any comparison baseline and publication approval. Keep private evidence outside publicly served files. Render no result band when the approved result list is absent or empty. Do not show zeroes, simulated percentages, sample testimonials or “data coming soon” metric cards.

The visual fallback is a complete case narrative with authentic screenshots, confirmed decisions and delivered scope. No outcome number is necessary for the case to be useful.

## Future measurement plan for Askold

Primary business measure: qualified project inquiries. A mailto/phone/WhatsApp click is an intent signal, not a submitted or qualified lead.

| Event (proposed only) | Trigger | Allowed context |
| --- | --- | --- |
| `contact_intent` | Activated email/phone/messaging link | Channel, placement, route, locale |
| `case_study_view` | A published case route is viewed | Stable project ID, route, locale |
| `inquiry_submit_success` | Delivery service confirms receipt after server validation | Route, placement, locale; never message text or email |
| `inquiry_submit_error` | Submission fails | Coarse error category only |

Choose provider, privacy notice, consent behavior and retention before adding instrumentation. Never send names, email addresses, phone numbers, inquiry text, client order data or raw provider errors as analytics parameters. Do not enable advertising pixels or connect to client Firebase/GA4 properties as part of this foundation.

If a contact form is chosen, require server-side validation, abuse/rate controls, bounded input sizes, secret isolation, accessible status/failure states, retry behavior and actual delivery verification. “Sent” must mean confirmed server/provider acceptance; the source form's timeout simulation is not reusable delivery logic.

## Release decisions outstanding

The owner has supplied iLab scope and authorized publication of the two aggregate reporting screenshots documented below. Other result claims still require evidence and publication approval. Select the analytics provider and approved production origin before release; Resend is authorized for contact delivery, with live delivery verification still pending. Keep progressing with verified content while these are pending; do not fabricate missing evidence.

## Milestone 3 evidence and integration decisions

The owner supplied iLab's project scope in the Milestone 3 brief: custom design/development, service and SEO architecture, device/model navigation, catalog/shop, custom administration, responsive implementation and optimization. Public captures on 2026-11-16 confirm repair/service navigation, specific repair pages, device/model/part browsing and compatibility information. Private administration is not photographed or independently inspected. Public inquiry/price-unavailable states do not establish payment, order or authentication correctness.

Public HTML verifies service-site canonical URLs, titles/descriptions, Latvian/Russian alternate-language links, and Organization/WebSite/LocalBusiness/WebPage/BreadcrumbList/FAQ structured data; the inspected iPhone service page additionally contains Service/OfferCatalog/HowTo/ItemList markup. No equivalent shop language/structured-data claim is established. No ranking or rich-result eligibility is inferred from markup.

Frio Estrella and Latvir descriptions use current public interfaces. FixMobile and SeoQuill descriptions and imagery use the original portfolio archive. No launch dates, years of Askold experience, client testimonials, revenue, sales or growth percentages were invented.

The reusable result contract requires a metric definition, label, value/unit, reporting period, source evidence, verification date and explicit publication approval; an optional baseline supports comparisons. Empty results render no public section. The public case narrative is complete through delivered functionality and authentic media.

Before populating results, supply approved aggregate data:

| Presentation | Required input |
| --- | --- |
| Search clicks / impressions | Search Console property, exact date range, search type, country/device/page/query filters and export reference |
| Organic traffic | GA4 property, source/medium or default-channel definition, sessions/users choice, date range/timezone and exclusions |
| Engagement | Named measure (engaged sessions, engagement rate or engagement time), its denominator/unit and reporting context |
| Verified conversions | Specific key-event definition and counting method; confirmed delivery/business acceptance where relevant; attribution limits |
| Before / after | Comparable windows, absolute values/units for each window, change date and relevant campaign/seasonality changes |

The owner authorized Resend contact delivery, superseding the email-draft workflow. The existing modal submits through server-only `POST /api/contact`; provider acceptance with an email ID is required before a success response. Acceptance is distinct from confirmed inbox delivery or a qualified business lead. Direct email, phone, WhatsApp and Telegram remain intent signals. No names, addresses, message content, API keys or raw provider errors are logged by the application or sent to analytics. The site adds no inquiry database; messages are processed by Resend and the configured receiving inbox, whose access and retention need to be covered by the production privacy policy. Honeypot, field/request bounds and origin checks provide basic abuse resistance, not distributed rate limiting. No in-memory rate limiter or conversion instrumentation is added.

Analytics collection remains disabled. Final release review must cover consent/analytics choices, contact privacy and retention, production indexing, live delivery verification and evidence publication. Final QA still requires explicit authorization. Public project screenshots are not GA4/Search Console reporting data.

## Owner-requested iLab screenshot placeholders

The latest content brief explicitly requests two temporary screenshot slots in the iLab case: a Google Analytics traffic chart and a before/after metrics comparison. These are clearly labeled placeholders, not fabricated charts or measured results. No metric values, percentages, synthetic trends or fake reporting-interface screenshots may be displayed. This narrow exception to the earlier no-placeholder presentation rule applies to these two screenshot slots only; the `VerifiedProjectResult` publication guard remains unchanged.

Replace the slots only with approved, redacted screenshots. Capture the property, exact reporting windows, timezone, channel/filter definitions and metric names/units; before/after periods must be comparable. For an SEO narrative, distinguish organic traffic from total traffic and document the change/intervention date and other material influences. A screenshot does not by itself establish that SEO caused a change. Account identifiers and private/customer information must not be exposed. No GA connection or collection is being enabled.

Owner-confirmed scope additions in this pass: iLab SEO/optimization, and AI chatbots on FRIO ESTRELLA and LATVIR. These are owner-provided facts, not new live chatbot tests. No provider, model, training method, response quality, availability guarantee or conversion impact has been supplied or inferred.

## Owner-supplied iLab reporting screenshots — 23 November 2026

The owner explicitly requested these images for public iLab SEO evidence, including suitable Services use. This supersedes the two temporary empty slots above. Both screenshots show aggregate reporting, with no visible account identifiers, customer details, queries or credentials. Preserve the original pixels and Russian interface labels; add readable English descriptions, source labels and reporting context. Provide full-size image access, particularly for the wide Search Console capture on mobile.

| Report | Visible period and measures | Publication interpretation |
| --- | --- | --- |
| Google Search Console | 1–31 October 2026 versus 1–31 October 2025: 1.68K versus 1.07K clicks; 30K versus 21.3K impressions; 5.6% versus 5.0% CTR; 4.7 versus 8.6 average position | A year-over-year search-performance comparison, not a dated intervention study. Values are rounded as displayed; do not derive precise growth percentages from them. Suitable compact SEO proof on Services, linked to the complete case. |
| Google Analytics overview | 22K active users, 71K views, 21K engaged sessions. Labels show “This year (1 January–today)” against “Previous period”; the screenshot also shows relative changes. | Broader website activity in the case study. The exact reporting year/cutoff, comparison window and channel filters are not visible; do not infer organic-only traffic, exact dates, conversions or revenue. No Services SEO metric is derived from this chart. |

The owner identifies both reports as iLab; the cropped images do not independently show property identity. Receipt on 23 November 2026 is not a verified capture date or the chart's cutoff. Search type, filters, timezone, intervention dates and other influences remain undocumented. No account access or independent reporting audit is claimed, and neither image alone establishes that the website or SEO work caused the observed change. The guarded `VerifiedProjectResult` contract remains unchanged; these are source screenshots with captions, not a fabricated result band. Analytics collection remains disabled and final QA still requires explicit authorization.

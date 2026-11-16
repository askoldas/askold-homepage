# Analytics and project evidence

Updated: 2026-11-16. No analytics provider is configured in the new app. No private analytics, Search Console or transaction data was accessed. Milestone 3 prepares conditional results presentation without publishing sample figures.

## Evidence status

| Topic | Available evidence | Still needed |
| --- | --- | --- |
| iLab service site | Public page at https://ilab.lv exposes Latvian repair services, price/contact links and service locations | Confirm Askold's exact role, dates, delivered scope and permission to publish relevant work |
| iLab shop | https://ilab.lv/shop exposes parts browsing, device/model/part selection, compatibility, product pages and inquiry/cart/account interfaces | Confirm implemented responsibilities and architecture; a visible interface does not prove a working payment/order/authentication flow |
| SEO work | Public content and service routes are inspectable | Baseline, interventions, indexing evidence and Search Console export |
| Business results | None provided | Approved GA4, Search Console or business reporting for matched periods |
| Other projects | Six project descriptions and supplied portfolio imagery in the reference | Current scope, display permissions and any approved outcomes; Stefanel is merchandising/print work |
| Contact | Source includes email, phone, WhatsApp and Telegram links | Confirm current preferred channel and choose a real delivery provider before implementing a form |

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

Owner must confirm public iLab scope, result publication permission and preferred contact method. Select analytics/contact providers and approved production origin before release. Keep milestones progressing with verified content while these are pending; do not fabricate missing evidence.

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

Contact is an email-draft workflow, not a submission service. The short form opens the visitor's email application and offers a copyable draft fallback; no inquiry is stored, logged, sent to analytics or falsely marked delivered. Native email and WhatsApp links remain available. A future provider still requires server validation, rate/abuse limits, secret handling, privacy/retention decisions and a real acceptance check before any sent confirmation or conversion event can be enabled. A mailto or WhatsApp activation remains an intent signal only. No provider credentials are needed for the Milestone 3 fallback.

Analytics collection remains disabled. M4 must review consent/provider choices, production indexing, real delivery integration if requested and evidence publication. Public project screenshots are not GA4/Search Console reporting data.

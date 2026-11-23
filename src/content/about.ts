export const career = [
  {
    dates: "2015–Present", role: "Freelance Web Developer & Brand/UI Designer", organization: "Remote / Self-Employed",
    responsibilities: ["Responsive websites with WordPress, WooCommerce, PrestaShop and other CMS platforms, with more recent work in React and Next.js.", "Brand identities, logos and visual materials across websites, packaging and print. Content and interface flows shaped around clarity, usability and performance."],
  },
  {
    dates: "2024–2025", role: "Web Developer", organization: "Create and Scribe EO", location: "Riga",
    responsibilities: ["Client websites and landing pages focused on performance, usability and visual consistency, using HTML, CSS/SASS and JavaScript in CMS and custom environments.", "A custom Airtable project and task management setup supporting team coordination and workflow."],
  },
  {
    dates: "2021–2023", role: "Client Onboarding & Customer Support Specialist", organization: "Nets Denmark A/S Lietuvos filialas", location: "Remote / Vilnius",
    responsibilities: ["Helped clients with digital-payment setup, platform access and customer inquiries, with attention to accuracy, clarity and compliance.", "Risk and AML screening, verification, internal documentation and process improvements."],
  },
  {
    dates: "2019–2020", role: "Web Content & Marketing Assistant", organization: "Litada", location: "Riga",
    responsibilities: ["Product landing pages, responsive presentation, CMS content, image preparation and layout consistency.", "Digital marketing campaign visuals, product highlights and delivery of supporting assets."],
  },
  {
    dates: "2008–2018", role: "Business & Digital Operations Manager", organization: "BalticTex SIA", location: "Riga",
    responsibilities: ["Marketing and product visuals, company website content and layout, and interfaces for a stock management system and internal application.", "Daily operations across sales, logistics and suppliers, alongside business development and workflow improvements with digital tools."],
  },
] as const;

export const expertise = [
  { title: "Identity & interface", description: "Visual identities, UI/UX, packaging and print.", tools: "Figma, Axure RP, Photoshop, Illustrator, InDesign and After Effects." },
  { title: "Web development", description: "Responsive interfaces, custom functionality and motion.", tools: "HTML, CSS/SASS, JavaScript, React, Next.js and GSAP." },
  { title: "Commerce & content", description: "Online stores, content systems and structured product experiences.", tools: "WordPress, WooCommerce, PrestaShop, Shopify and Firebase." },
  { title: "Business & workflow", description: "Practical operations, coordination and clear project information.", tools: "Airtable, Notion, ClickUp, Trello, Miro, Lucidchart and GitHub." },
] as const;

export const education = [
  { dates: "2023–2024", title: "Front-End Developer Program", institution: "TeachMeSkills", location: "Online" },
  { dates: "2018", title: "Advanced HTML & CSS", institution: "WebCode Academy", location: "Online" },
  { dates: "2001–2005", title: "Bachelor’s in Chemical Engineering", institution: "Klaipeda University", location: "Lithuania" },
  { dates: "1999–2001", title: "Corporate Administration", institution: "KVK", location: "Lithuania" },
] as const;

export const languages = [{ name: "Russian", code: "ru" }, { name: "English", code: "en" }, { name: "Lithuanian", code: "lt" }] as const;

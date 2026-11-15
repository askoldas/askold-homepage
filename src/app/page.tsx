import { Container } from "@/components/layout/container";
import { ActionLink } from "@/components/ui/action-link";
import { getContent } from "@/lib/i18n";

export default function HomePage() {
  const content = getContent();
  const contactEmail = content.contact.email;
  return (
    <>
      <header className="site-header">
        <Container><p className="site-name">{content.site.name}</p></Container>
      </header>
      <main id="main-content" className="foundation" tabIndex={-1}>
        <Container>
          <h1 className="display-title">{content.foundation.heading}</h1>
          <p className="foundation-description">{content.foundation.description}</p>
          {contactEmail ? (
            <p className="foundation-action">
              <ActionLink href={`mailto:${contactEmail}`}>{content.foundation.contactLabel}</ActionLink>
            </p>
          ) : null}
        </Container>
      </main>
    </>
  );
}

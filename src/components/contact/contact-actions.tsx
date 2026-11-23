import styles from "./contact-actions.module.css";

export function ContactActions({ phoneLabel = "Phone", className = "" }: { phoneLabel?: string; className?: string }) {
  return <div className={`${styles.actions}${className ? ` ${className}` : ""}`}>
    <a href="tel:+37128878495" aria-label="Phone +371 28878495"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 3 4 4c-2 2 0 7 4 11s9 6 11 4l1-3-5-3-2 2c-2-1-3-2-4-4l2-2-4-6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg><span>{phoneLabel}</span></a>
    <a href="https://wa.me/37128878495"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.9Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="m8 7 1.5-.5 1.4 3-1.2 1.2c.7 1.5 1.7 2.5 3.2 3.2l1.2-1.2 3 1.4-.5 1.5c-.5 1.4-3.7 1-6.3-1.6S6.6 7.5 8 7Z" fill="currentColor" /></svg><span>WhatsApp</span></a>
    <a href="https://t.me/Askoldas"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m21 3-3.7 17-5.8-4.4-3 2.8.6-5.7 8.1-6.5-10 5.2L3 10 21 3Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Telegram</span></a>
  </div>;
}

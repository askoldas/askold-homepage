import type { ComponentPropsWithoutRef } from "react";

type ActionLinkProps = ComponentPropsWithoutRef<"a"> & { href: string };

export function ActionLink({ children, className, ...props }: ActionLinkProps) {
  return (
    <a className={["action-link", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}

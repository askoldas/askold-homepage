import type { ComponentPropsWithoutRef } from "react";

type SectionHeadingProps = ComponentPropsWithoutRef<"h2"> & { as?: "h1" | "h2" | "h3" };

export function SectionHeading({ as: Heading = "h2", className, ...props }: SectionHeadingProps) {
  return <Heading className={["section-heading", className].filter(Boolean).join(" ")} {...props} />;
}

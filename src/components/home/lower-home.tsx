import { ServicesWorkbench } from "./services-workbench";
import { ProcessTimeline } from "./process-timeline";
import { PersonalChapter } from "./personal-chapter";
import { PageInquiry } from "@/components/interior/page-inquiry";

export function LowerHome() {
  return <><ServicesWorkbench /><ProcessTimeline /><PersonalChapter /><PageInquiry flush /></>;
}

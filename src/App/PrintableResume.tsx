import { PageBlock, Box } from "braid-design-system";

import { ResumeIsWIP } from "../components/Notices/ResumeIsWIP";
import { PageContent } from "../components/PageSections/PageContent";
import { PageFooter } from "../components/PageSections/PageFooter";
import PageHeader from "../components/PageSections/PageHeader";
import React from "react";

export const PaperResume = () => (
  <PageBlock component="main" width="medium">
    <Box height="touchable" />
    <ResumeIsWIP />
    <PageHeader />
    <PageContent />
    <Box height="touchable" />
    <PageFooter />
    <Box height="touchable" />
  </PageBlock>
);

export default PaperResume;

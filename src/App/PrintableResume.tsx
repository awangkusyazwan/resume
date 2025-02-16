import { PageBlock, Box } from 'braid-design-system';

import { ResumeHeader } from 'src/components/ResumeHeader/ResumeHeader';

export const PaperResume = () => (
  <PageBlock component="main" width="medium">
    <Box height="touchable" />
    <ResumeHeader />
  </PageBlock>
);

export default PaperResume;

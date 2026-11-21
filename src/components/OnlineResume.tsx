import { PageBlock, Box } from 'braid-design-system';

import NavBar from '../components/NavBar';
import { ResumeIsWIP } from '../components/Notices/ResumeIsWIP';
import { PageContent } from '../components/Segments/PageContent';
import { PageFooter } from '../components/Segments/PageFooter';
import PageHeader from '../components/Segments/PageHeader';

export const OnlineResume = () => (
  <>
    <NavBar />
    <PageBlock component="main" width="medium">
      <Box height="touchable" />
      <ResumeIsWIP />
      <PageHeader />
      <PageContent />
      <Box height="touchable" />
      <PageFooter />
      <Box height="touchable" />
    </PageBlock>
  </>
);

export default OnlineResume;

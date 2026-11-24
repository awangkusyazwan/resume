import { PageBlock, Box } from 'braid-design-system';

import NavBar from '../components/NavBar';
import { PageContent } from '../components/Segments/PageContent';
import { PageFooter } from '../components/Segments/PageFooter';
import PageHeader from '../components/Segments/PageHeader';

export const OnlineResume = () => (
  <>
    <NavBar />
    <PageBlock component="main" width="medium">
      <Box height="touchable" />
      <PageHeader />
      <PageContent />
      <Box height="touchable" />
      <PageFooter />
      <Box height="touchable" />
    </PageBlock>
  </>
);

export default OnlineResume;

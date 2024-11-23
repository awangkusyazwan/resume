import {
  PageBlock,
  Box,
  Text,
  Hidden,
  Alert,
  Spread,
  Heading,
  ContentBlock,
  Card,
  Stack,
  Secondary,
  Inline,
  TooltipRenderer,
  IconInfo,
  IconMail,
  TextLink,
  IconPhone,
  IconGlobe,
  Columns,
  Column,
  TabsProvider,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Notice,
  Link,
  Page,
} from 'braid-design-system';
import { ResumeIsWIP } from '../components/Notices/ResumeIsWIP';
import PageHeader from '../components/PageSections/PageHeader';
import { PageContent } from '../components/PageSections/PageContent';
import { PageFooter } from '../components/PageSections/PageFooter';

export const Resume = () => (
  <PageBlock component="main" width="medium">
    <Box height="touchable" />
    <ResumeIsWIP />
    <Box height="touchable" />
    <PageHeader />
    <Box height="touchable" />
    <PageContent />
    <Box height="touchable" />
    <PageFooter />
    <Box height="touchable" />
  </PageBlock>
);

export default Resume;

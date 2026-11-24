import {
  Hidden,
  Box,
  TabsProvider,
  Stack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  IconWorkExperience,
  IconRecommended,
  IconStar,
} from 'braid-design-system';

import AcademicAndCredentialsSection from '../Sections/AcademicAndCredentialsSection';
import ProfessionalExperienceSection from '../Sections/ProfessionalExperienceSection';
import ReferencesSection from '../Sections/ReferencesSection';
import { SkillsSection } from '../Sections/SkillsSection';
import VolunteeringInterestSection from '../Sections/VolunteeringInterestsSection';
import SectionWrapper from '../Wrappers/SectionWrapper';

export const PageContent = () => {
  const pageContents = [
    {
      component: <ProfessionalExperienceSection />,
      icon: <IconWorkExperience />,
      tabLabel: 'Professional Experience',
    },
    {
      component: <AcademicAndCredentialsSection />,
      icon: <IconRecommended />,
      tabLabel: 'Academic and Professional Credentials',
    },
    {
      component: <VolunteeringInterestSection />,
      icon: <IconStar />,
      tabLabel: 'Volunteering and Interests',
    },
  ];
  return (
    <>
      <Hidden print>
        <Box height="touchable" />
        <TabsProvider id="tabs">
          <Stack space="xxsmall">
            <Tabs align="center" label="tabs-for-resume-item">
              {pageContents.map(({ icon, tabLabel }) => (
                <Tab key={tabLabel} icon={icon}>
                  {tabLabel}
                </Tab>
              ))}
            </Tabs>
            <TabPanels>
              {pageContents.map(({ component, tabLabel }) => (
                <TabPanel key={tabLabel}>
                  <SectionWrapper>{component}</SectionWrapper>
                </TabPanel>
              ))}
            </TabPanels>
          </Stack>
        </TabsProvider>
        <Box height="touchable" />
        <SkillsSection />
      </Hidden>
      <ReferencesSection />
    </>
  );
};

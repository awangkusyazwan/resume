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

import AcademicAndCredentialsSection from '../ResumeSections/AcademicAndCredentialsSection';
import ProfessionalExperienceSection from '../ResumeSections/ProfessionalExperienceSection';
import ReferencesSection from '../ResumeSections/ReferencesSection';
import VolunteeringInterestSection from '../ResumeSections/VolunteeringInterestsSection';
import React from 'react';
import { SkillsSection } from '../ResumeSections/SkillsSection';

export const PageContent = () => (
  <>
    <Hidden print>
      <Box height="touchable" />
      <TabsProvider id="tabs">
        <Stack space="xxsmall">
          <Tabs label="tabs-for-resume-item">
            <Tab icon={<IconWorkExperience />}>Professional Experience </Tab>
            <Tab icon={<IconRecommended />}>
              Academic and Professional Credentials
            </Tab>
            <Tab icon={<IconStar />}>Volunteering and Interests</Tab>
          </Tabs>
          <TabPanels>
            <TabPanel>
              <ProfessionalExperienceSection />
            </TabPanel>
            <TabPanel>
              <AcademicAndCredentialsSection />
            </TabPanel>
            <TabPanel>
              <VolunteeringInterestSection />
            </TabPanel>
          </TabPanels>
        </Stack>
      </TabsProvider>
      <Box height="touchable" />
      <SkillsSection />
    </Hidden>
    <ReferencesSection />
  </>
);

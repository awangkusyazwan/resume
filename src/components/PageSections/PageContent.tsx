import {
  Hidden,
  Box,
  TabsProvider,
  Stack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
} from 'braid-design-system';

import AcademicAndCredentialsSection from '../ResumeSections/AcademicAndCredentialsSection';
import ProfessionalExperienceSection from '../ResumeSections/ProfessionalExperienceSection';
import ReferencesSection from '../ResumeSections/ReferencesSection';
import VolunteeringInterestSection from '../ResumeSections/VolunteeringInterestsSection';

export const PageContent = () => (
  <>
    <Hidden print>
      <Box height="touchable" />
      <TabsProvider id="tabs">
        <Stack space="medium">
          <Tabs label="tabs-for-resume-item">
            <Tab>Professional Experience </Tab>
            <Tab>Academic and Professional Credentials</Tab>
            <Tab>Volunteering and Interests</Tab>
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
    </Hidden>
    <ReferencesSection />
  </>
);

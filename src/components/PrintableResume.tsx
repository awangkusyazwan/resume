import { PageBlock, Box, Text } from 'braid-design-system';

import { PrintableResumeHeader } from 'src/components/Header/PrintableResumeHeader';
import AcademicAndCredentialsSection from 'src/components/Sections/AcademicAndCredentialsSection';
import ProfessionalExperienceSection from 'src/components/Sections/ProfessionalExperienceSection';
import ReferencesSection from 'src/components/Sections/ReferencesSection';
import { SkillsSection } from 'src/components/Sections/SkillsSection';
import VolunteeringInterestSection from 'src/components/Sections/VolunteeringInterestsSection';

const PrintableResume = () => (
  <PageBlock component="main" width="medium">
    <PrintableResumeHeader />
    <Text>PROFESSIONAL EXPERIENCE</Text>
    <hr />
    <ProfessionalExperienceSection />
    <Box style={{ breakInside: 'avoid' }} paddingTop="xxsmall">
      <Text>ACADEMICS AND CERTIFICATIONS</Text>
      <hr />
      <AcademicAndCredentialsSection />
    </Box>
    <Box style={{ breakInside: 'avoid' }} paddingTop="xxsmall">
      <Text>VOLUNTEERING AND INTERESTS</Text>
      <hr />
      <VolunteeringInterestSection />
    </Box>
    <Box style={{ breakInside: 'avoid' }}>
      <SkillsSection />
    </Box>
    <ReferencesSection />
  </PageBlock>
);

export default PrintableResume;

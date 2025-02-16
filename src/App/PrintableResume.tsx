import { PageBlock, Box, Text } from 'braid-design-system';

import { PrintableResumeHeader } from 'src/components/ResumeHeader/PrintableResumeHeader';
import AcademicAndCredentialsSection from 'src/components/ResumeSections/AcademicAndCredentialsSection';
import ProfessionalExperienceSection from 'src/components/ResumeSections/ProfessionalExperienceSection';
import ReferencesSection from 'src/components/ResumeSections/ReferencesSection';
import { SkillsSection } from 'src/components/ResumeSections/SkillsSection';
import VolunteeringInterestSection from 'src/components/ResumeSections/VolunteeringInterestsSection';

export const PaperResume = () => (
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

export default PaperResume;

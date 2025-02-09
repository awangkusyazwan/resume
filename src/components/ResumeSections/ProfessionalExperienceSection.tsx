import { Box, List, Spread, Text } from 'braid-design-system';

import { professionalExperiences as _professionalExperiences } from 'src/App/data/professional-experiences';

export const ProfessionalExperienceSection = () => {
  const professionalExperiences = _professionalExperiences;

  return professionalExperiences.map((experience, index) => (
    <Box key={index} marginBottom="medium">
      <Spread space="small">
        <Text size="large" weight="strong">
          {experience.employer}
        </Text>
        <Text size="large" weight="strong">
          {experience.location}
        </Text>
      </Spread>
      <hr />
      <Spread space="small">
        <i>{experience.position}</i>
        <Text size="small">{experience.duration}</Text>
      </Spread>
      <Box marginY="small">
        <List space="xsmall">
          {experience.rolesAndAchievements.map((roleAndAchievement) => (
            <Text key={roleAndAchievement}>{roleAndAchievement}</Text>
          ))}
        </List>
      </Box>
    </Box>
  ));
};

export default ProfessionalExperienceSection;

import { Box, List, Spread, Text } from 'braid-design-system';
import React from 'react';

import { professionalExperiences as _professionalExperiences } from '../../data/data';

export const ProfessionalExperienceSection = () => {
  const professionalExperiences = _professionalExperiences;

  return (
    <Box
      marginBottom="medium"
      paddingY="small"
      overflow="auto"
      style={{ height: '600px' }}
    >
      {professionalExperiences.map((experience, index) => (
        <Box key={index} marginBottom="medium">
          <Spread space="small">
            <Text size="large" weight="strong">
              {experience.employer}
            </Text>
            <Text size="large" weight="strong">
              {experience.location}
            </Text>
          </Spread>
          <Box marginY="xxsmall" />
          <Spread space="small" alignY="center">
            <i>{experience.position}</i>
            <Text size="small">{experience.tenure}</Text>
          </Spread>
          <Box marginY="small">
            <List space="xsmall">
              {experience.rolesAndAchievements.map((roleAndAchievement) => (
                <Text key={roleAndAchievement}>{roleAndAchievement}</Text>
              ))}
            </List>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProfessionalExperienceSection;

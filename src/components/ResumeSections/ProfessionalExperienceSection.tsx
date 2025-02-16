import { Box, List, Spread, Text } from 'braid-design-system';
import React from 'react';

import { professionalExperiences as _professionalExperiences } from '../../data/data';
import SectionWrapper from '../Wrappers/SectionWrapper';

export const ProfessionalExperienceSection = () => {
  const professionalExperiences = _professionalExperiences;

  return (
    <>
      {professionalExperiences.map((experience, index) => (
        <Box key={index} marginBottom="medium" style={{ breakInside: 'avoid' }}>
          <Spread space="small">
            <Text size="large" weight="strong">
              {experience.employer}
            </Text>
            <Text size="large" weight="strong" align="right">
              {experience.location}
            </Text>
          </Spread>
          <Box marginY="xxsmall" />
          <Spread space="small" alignY="center">
            <Text size="small">
              <i>{experience.position}</i>
            </Text>
            <Text size="small" align="right">
              {experience.tenure}
            </Text>
          </Spread>
          <Box marginY="small">
            <List space="xsmall">
              {experience.rolesAndAchievements.map((roleAndAchievement) => (
                <Text key={roleAndAchievement} size="small">
                  {roleAndAchievement}
                </Text>
              ))}
            </List>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProfessionalExperienceSection;

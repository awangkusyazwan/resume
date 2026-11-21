import { Box, List, Spread, Text } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

export const VolunteeringInterestSection = () => {
  const { volunteeringExperiences } = useResumeData();

  return (
    <>
      {volunteeringExperiences.map((volunteeringExperience) => (
        <Box
          key={`volunteeringExperience-${volunteeringExperience.organization}`}
          marginBottom="medium"
          style={{ breakInside: 'avoid' }}
        >
          <Spread space="small" alignY="center">
            <Text size="large" weight="strong">
              {volunteeringExperience.organization}
            </Text>
            <Text size="large" weight="strong" align="right">
              {volunteeringExperience.location}
            </Text>
          </Spread>
          <Box marginY="xxsmall" />
          <Spread space="small">
            <Text size="small">
              <i>{volunteeringExperience.position}</i>
            </Text>
            <Text size="small" align="right">
              {volunteeringExperience.tenure}
            </Text>
          </Spread>
          <Box marginY="small">
            <List space="xsmall">
              {volunteeringExperience.rolesAndAchievements.map(
                (roleAndAchievement) => (
                  <Text
                    key={`roleAndAchievement-${roleAndAchievement}`}
                    size="small"
                  >
                    {roleAndAchievement}
                  </Text>
                ),
              )}
            </List>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default VolunteeringInterestSection;

import { Box, List, Spread, Text } from 'braid-design-system';
import { volunteeringExperiences as _volunteeringExperiences } from 'src/data/data';
import SectionWrapper from '../Wrappers/SectionWrapper';
export const VolunteeringInterestSection = () => {
  const volunteeringExperiences = _volunteeringExperiences;

  return (
    <>
      {volunteeringExperiences.map((volunteeringExperience, index) => (
        <Box
          key={`volunteeringExperience-${index}`}
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
                (roleAndAchievement, index) => (
                  <Text key={`roleAndAchievement-${index}`} size="small">
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

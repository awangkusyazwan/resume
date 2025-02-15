import { Box, List, Spread, Text } from 'braid-design-system';
import { volunteeringExperiences as _volunteeringExperiences } from 'src/data/data';
export const VolunteeringInterestSection = () => {
  const volunteeringExperiences = _volunteeringExperiences;

  return (
    <Box
      marginBottom="medium"
      paddingY="small"
      overflow="auto"
      style={{ height: '600px' }}
    >
      {/* Volunteering Interests */}
      {volunteeringExperiences.map((volunteeringExperience, index) => (
        <Box key={`volunteeringExperience-${index}`} marginBottom="medium">
          <Spread space="small" alignY="center">
            <Text size="large" weight="strong">
              {volunteeringExperience.organization}
            </Text>
            <Text size="large" weight="strong">
              {volunteeringExperience.location}
            </Text>
          </Spread>
          <Box marginY="xxsmall" />
          <Spread space="small">
            <Text size="small">
              <i>{volunteeringExperience.position}</i>
            </Text>
            <Text size="small">{volunteeringExperience.tenure}</Text>
          </Spread>
          <Box marginY="small">
            <List space="xsmall">
              {volunteeringExperience.rolesAndAchievements.map(
                (roleAndAchievement, index) => (
                  <Text key={`roleAndAchievement-${index}`}>
                    {roleAndAchievement}
                  </Text>
                ),
              )}
            </List>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default VolunteeringInterestSection;

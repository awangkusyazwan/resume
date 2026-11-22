import { Badge, Box, List, Spread, Strong, Text } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

export const ProfessionalExperienceSection = () => {
  const { professionalExperiences } = useResumeData();

  return (
    <>
      {professionalExperiences.map((experience, index) => (
        <Box
          key={`professionalExperience-${index}`}
          marginBottom="medium"
          style={{ breakInside: 'avoid' }}
        >
          <Spread space="small" alignY="center">
            <Text size="large" weight="strong" maxLines={4}>
              {experience.employer}
            </Text>
            <Box width='full' display='flex' gap="small" alignItems="center">
              <Badge weight='strong' tone='positive'>{experience.workMode}</Badge>
              <Text size="large" weight="strong" align="right" maxLines={2}>
                {experience.location}
              </Text>
            </Box>
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
              {experience.rolesAndAchievements.map((roleAndAchievement, index) => (
                Object.entries(roleAndAchievement).map(([key, value]) => (
                  <Text key={`roleAndAchievement-${index}`} size="small">
                    <Strong>
                      {`${key}: `}
                    </Strong>
                    {`${value}`}
                  </Text>
                ))
              ))}
            </List>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default ProfessionalExperienceSection;

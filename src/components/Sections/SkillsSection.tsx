import { Box, Badge, Inline, Stack, Heading } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

export const SkillsSection = () => {
  const { categorisedSkills } = useResumeData();

  return (
    <Box>
      <Stack space="small">
        <Heading level="4">Skills</Heading>
        <Inline space="xsmall">
          {categorisedSkills.map((category) =>
            category.skills.map((skill, index) => (
              <Badge
                key={`skill-${index}`}
                weight="regular"
                tone={category.badgeTone}
              >
                {skill}
              </Badge>
            )),
          )}
        </Inline>
      </Stack>
    </Box>
  );
};

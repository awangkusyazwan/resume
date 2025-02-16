import { Box, Badge, Inline, Stack, Heading } from 'braid-design-system';

import { categorisedSkills as _categorisedSkills } from 'src/data/data';

export const SkillsSection = () => {
  const categorisedSkills = _categorisedSkills;

  return (
    <Box marginBottom="medium">
      <Stack space="small">
        <Heading level="4">Skills</Heading>
        <Inline space="xsmall">
          {categorisedSkills.map((category) =>
            category.skills.map((skill, index) => (
              <Badge key={`skill-${index}`} tone={category.badgeTone}>
                {skill}
              </Badge>
            )),
          )}
        </Inline>
      </Stack>
    </Box>
  );
};

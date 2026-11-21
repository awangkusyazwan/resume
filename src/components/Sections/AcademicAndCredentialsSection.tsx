import { Box, Text, Spread, List, Badge } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

export const AcademicAndCredentialsSection = () => {
  const { academicBackgrounds, professionalCredentials, certifications } =
    useResumeData();

  return (
    <>
      {academicBackgrounds.map((academicBackground, index) => (
        <Box
          key={`academicBackground-${index}`}
          marginBottom="medium"
          style={{ breakInside: 'avoid' }}
        >
          <Spread space="small" alignY="center">
            <Text size="large" weight="strong">
              {academicBackground.institution}
            </Text>
            <Text size="large" weight="strong" align="right">
              {academicBackground.location}
            </Text>
          </Spread>
          <Box marginTop="xxsmall" />
          <Spread space="small">
            <Text size="small">
              <i>
                <a href={academicBackground.hrefForCredential}>
                  {academicBackground.qualification}
                </a>
              </i>
            </Text>
            <Text size="small" align="right">
              {academicBackground.tenure}
            </Text>
          </Spread>
          <Box marginY="small">
            <List space="xsmall">
              {academicBackground.rolesAndAchievements.map(
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
      {professionalCredentials.map((professionalCredential) => (
        <Box
          key={`professionalCredential-${professionalCredential.title}`}
          marginBottom="medium"
          style={{ breakInside: 'avoid' }}
        >
          <Text size="large" weight="strong">
            {professionalCredential.title}
          </Text>
          <Box marginY="xxsmall" />
          <Spread space="small">
            <Text size="small">
              {professionalCredential.awardingInstitution}
              <i>
                {' '}
                {'(Credential ID: '}
                <a href={professionalCredential.hrefForCredential}>
                  {professionalCredential.credentialId}
                </a>
              </i>
              {')'}
            </Text>
            {professionalCredential.expiryDate ? (
              <Text size="small" align="right">
                {professionalCredential.expiryDate}
              </Text>
            ) : null}
          </Spread>
        </Box>
      ))}
      {certifications.map((certification, index) => (
        <Box
          key={`certification-${index}`}
          marginBottom="medium"
          style={{ breakInside: 'avoid' }}
        >
          <Spread space="small" alignY="center">
            <Text size="large" weight="strong">
              {certification.title}
            </Text>
            <Badge tone="info">{certification.type}</Badge>
          </Spread>
          <Box marginY="xxsmall" />
          <Spread space="small">
            <Text size="small">
              <a href={certification.hrefForCredential}>
                <i>{certification.awardingInstitution}</i>
              </a>
            </Text>
          </Spread>
          <Box marginY="xsmall" />
          <List space="xsmall">
            {certification.scores?.map((score, scoreIndex) => (
              <Text size="small" key={`score-${scoreIndex}`}>
                {score}
              </Text>
            ))}
          </List>
        </Box>
      ))}
    </>
  );
};

export default AcademicAndCredentialsSection;

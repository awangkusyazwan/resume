import { Box, Text, Spread, List, Badge, Stack } from 'braid-design-system';

import {
  academicBackgrounds as _academicBackgrounds,
  professionalCredentials as _professionalCredentials,
  certifications as _certifications,
} from '../../data/data';

export const AcademicAndCredentialsSection = () => {
  const academicBackgrounds = _academicBackgrounds;
  const professionalCredentials = _professionalCredentials;
  const certifications = _certifications;

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
      {professionalCredentials.map((professionalCredential, index) => (
        <Box
          key={`professionalCredential-${index}`}
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
            {certification.scores?.map((score, index) => (
              <Text size="small" key={`score-${index}`}>
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

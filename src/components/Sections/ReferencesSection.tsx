import { Alert, Box, Heading, Stack, Text } from 'braid-design-system';

export const ReferencesSection = () => (
  <>
    <Box
      style={{
        height: '36px',
      }}
    />
    <Stack space="small">
      <Heading level="4">References</Heading>
      <Alert tone="info">
        <Text>References available upon request</Text>
      </Alert>
    </Stack>
  </>
);

export default ReferencesSection;

import { Stack, Secondary, Text, Heading, Spread } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

const NameAndCredentials = () => {
  const { name, credentials } = useResumeData();

  return (
    <Stack space="xsmall">
      <Spread space="small" alignY="top">
        <Heading level="2" align="left">
          {name}
        </Heading>
      </Spread>
      <Text size="small" align="left">
        <Secondary>{credentials.join(' • ')}</Secondary>
      </Text>
    </Stack>
  );
};

export default NameAndCredentials;

import { Stack, Secondary, Text, Avatar, Inline } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

const NameAndCredentials = () => {
  const { name, credentials, imageUrl } = useResumeData();

  return (
    <Stack space="xsmall">
      <Inline space="small" alignY="center" >
        <Avatar name={name} size="large" imageUrl={imageUrl} />
        <Text weight="strong" size="large" align="left">
          {name}
        </Text>
      </Inline>
      <Text size="small" align="left">
        <Secondary>{credentials.join(' • ')}</Secondary>
      </Text>
    </Stack>
  );
};

export default NameAndCredentials;

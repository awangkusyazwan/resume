import { Stack, Secondary, Text } from 'braid-design-system';

const NameAndCredentials = () => {
  const name = 'Awangku Muhammad Syazwan bin Awangku Sazali';
  const credentials = ['BEng (Hons)', 'MBCS'];

  return (
    <Stack space="xsmall">
      <Text size="large" weight="strong" align="left">
        {name}
      </Text>
      <Text size="small">
        <Secondary>{credentials.join(' • ')}</Secondary>
      </Text>
    </Stack>
  );
};

export default NameAndCredentials;

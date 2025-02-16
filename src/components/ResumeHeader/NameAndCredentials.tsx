import { Stack, Secondary, Text, Heading } from 'braid-design-system';

const NameAndCredentials = () => {
  const name = 'Awangku Muhammad Syazwan bin Awangku Sazali';
  const credentials = ['BEng (Hons)', 'MBCS'];

  return (
    <Stack space="xsmall">
      <Heading level="2" align={{ mobile: 'center', tablet: 'left' }}>
        {name}
      </Heading>
      <Text size="small" align={{ mobile: 'center', tablet: 'left' }}>
        <Secondary>{credentials.join(' • ')}</Secondary>
      </Text>
    </Stack>
  );
};

export default NameAndCredentials;

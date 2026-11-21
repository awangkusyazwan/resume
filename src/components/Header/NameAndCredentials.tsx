import {
  Stack,
  Secondary,
  Text,
  Heading,
  Hidden,
  IconPrint,
  Spread,
  ButtonIcon,
} from 'braid-design-system';
import { Link } from 'react-router-dom';

import { useResumeData } from '../contexts/ResumeData';

const NameAndCredentials = ({
  isOnlineResume = true,
}: {
  isOnlineResume?: boolean;
}) => {
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

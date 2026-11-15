import {
  Stack,
  Secondary,
  Text,
  Link,
  Heading,
  Hidden,
  IconPrint,
  Spread,
  ButtonIcon,
} from 'braid-design-system';

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
        {isOnlineResume ? (
          <Link to="/printable" target="_blank">
            <IconPrint size="xsmall" />
          </Link>
        ) : (
          <Hidden print>
            <ButtonIcon
              label="Print"
              id="print-resume"
              icon={<IconPrint />}
              onClick={() => window.print()}
              size="small"
            />
          </Hidden>
        )}
      </Spread>
      <Text size="small" align="left">
        <Secondary>{credentials.join(' • ')}</Secondary>
      </Text>
    </Stack>
  );
};

export default NameAndCredentials;

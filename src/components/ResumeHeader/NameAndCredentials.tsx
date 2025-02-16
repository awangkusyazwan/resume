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

const NameAndCredentials = ({
  isOnlineResume = true,
}: {
  isOnlineResume?: boolean;
}) => {
  const name = 'Awangku Muhammad Syazwan bin Awangku Sazali';
  const credentials = ['BEng (Hons)', 'MBCS'];

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

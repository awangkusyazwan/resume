import { Box, Stack, Inline } from 'braid-design-system';

import NameAndCredentials from './NameAndCredentials';
import PointsOfContact from './PointsOfContact';
import Profiles from './Profiles';

export const ResumeHeader = () => (
  <Box
    background="neutralSoft"
    borderRadius="large"
    paddingTop="medium"
    paddingBottom="xsmall"
    paddingX={{ mobile: 'xsmall', tablet: 'medium' }}
  >
    <Stack space="small">
      <NameAndCredentials />
      <Box
        display="flex"
        alignItems={{ mobile: 'flexStart', tablet: 'center' }}
        justifyContent={{ mobile: 'center', tablet: 'spaceBetween' }}
      >
        <Inline space="large" align={{ mobile: 'center', tablet: 'left' }}>
          <PointsOfContact />
          <Profiles />
        </Inline>
      </Box>
    </Stack>
  </Box>
);

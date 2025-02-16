import { Box, Stack, Inline } from 'braid-design-system';

import NameAndCredentials from './NameAndCredentials';
import PrintablePointsOfContact from './PrintablePointsOfContact';
import PrintableProfiles from './PrintableProfiles';

export const PrintableResumeHeader = () => (
  <Box
    background="neutralSoft"
    borderRadius="large"
    paddingTop="medium"
    paddingBottom="xsmall"
    paddingX={{ mobile: 'xsmall', tablet: 'medium' }}
    marginY="small"
  >
    <Stack space="small">
      <NameAndCredentials />
      <Box
        display="flex"
        alignItems={{ mobile: 'flexStart', tablet: 'center' }}
        justifyContent={{ mobile: 'flexStart', tablet: 'spaceBetween' }}
      >
        <Inline space="small" collapseBelow="tablet">
          <PrintablePointsOfContact />
          <PrintableProfiles />
        </Inline>
      </Box>
    </Stack>
  </Box>
);

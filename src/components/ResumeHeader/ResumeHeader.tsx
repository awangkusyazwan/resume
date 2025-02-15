import { Box, Stack, Inline } from 'braid-design-system';

import NameAndCredentials from './NameAndCredentials';
import PointsOfContact from './PointsOfContact';
import ProfessionalPortfolio from './ProfessionalPortfolio';

export const ResumeHeader = () => (
  <Box background="neutralSoft" borderRadius="large" padding="large">
    <Stack space="small">
      <NameAndCredentials />
      <Box
        display="flex"
        alignItems={{ mobile: 'flexStart', tablet: 'center' }}
        justifyContent={{ mobile: 'center', tablet: 'spaceBetween' }}
      >
        <Inline
          space="large"
          align={{ mobile: 'center', tablet: 'left' }}
          collapseBelow="tablet"
        >
          <PointsOfContact />
          <ProfessionalPortfolio />
        </Inline>
      </Box>
    </Stack>
  </Box>
);

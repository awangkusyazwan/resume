import { Text, Inline, Stack } from 'braid-design-system';

import { GitHubLogo } from './assets/GitHubLogo';
import { LinkedInLogo } from './assets/LinkedInLogo';
import { YouTubeLogo } from './assets/YouTubeLogo';

const ProfessionalPortfolio = () => (
  <Stack space="small">
    <Text weight="strong" tone="promote" size="small" align="left">
      My Profiles
    </Text>
    <Inline
      space="xxsmall"
      collapseBelow="tablet"
      align={{ mobile: 'left', tablet: 'center' }}
    >
      <LinkedInLogo />
      <YouTubeLogo />
      <GitHubLogo />
    </Inline>
  </Stack>
);

export default ProfessionalPortfolio;

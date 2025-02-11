import { Text, Inline, Stack } from 'braid-design-system';

import { GitHubLogo } from './assets/GitHubLogo';
import { LinkedInLogo } from './assets/LinkedInLogo';
import { Logo } from './assets/Logo';
import { YouTubeLogo } from './assets/YouTubeLogo';

const ProfessionalPortfolio = () => {
  const hrefLinkedIn = 'https://www.linkedin.com/in/awangkumuhammadsyazwan';
  const hrefYouTube = 'https://www.youtube.com/@syaz-dev';
  const hrefGitHub = 'https://github.com/awangkusyazwan/';

  return (
    <Stack space="small">
      <Text weight="strong" tone="promote" size="small" align="left">
        My Profiles
      </Text>
      <Inline
        space="xxsmall"
        collapseBelow="tablet"
        align={{ mobile: 'left', tablet: 'center' }}
      >
        <Logo href={hrefLinkedIn} logo={<LinkedInLogo />} />
        <Logo href={hrefYouTube} logo={<YouTubeLogo />} />
        <Logo href={hrefGitHub} logo={<GitHubLogo />} />
      </Inline>
    </Stack>
  );
};

export default ProfessionalPortfolio;

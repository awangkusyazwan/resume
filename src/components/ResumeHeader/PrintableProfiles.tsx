import { Text, Inline } from 'braid-design-system';

import { GitHubLogo } from './assets/GitHubLogo';
import { LinkedInLogo } from './assets/LinkedInLogo';
import { Logo } from './assets/Logo';
import { YouTubeLogo } from './assets/YouTubeLogo';

const Profiles = () => {
  const hrefLinkedIn = 'https://www.linkedin.com/in/awangkumuhammadsyazwan';
  const hrefYouTube = 'https://www.youtube.com/@syaz-dev';
  const hrefGitHub = 'https://github.com/awangkusyazwan/';

  return (
    <Inline space="small" alignY="center" align="left">
      <Text weight="strong" tone="promote" size="small">
        My Profiles
      </Text>
      <Inline space="xxsmall" align="left" alignY="center">
        <Logo href={hrefLinkedIn} logo={<LinkedInLogo />} />
        <Logo href={hrefYouTube} logo={<YouTubeLogo />} />
        <Logo href={hrefGitHub} logo={<GitHubLogo />} />
      </Inline>
    </Inline>
  );
};

export default Profiles;

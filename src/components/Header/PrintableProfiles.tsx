import { Text, Inline, Box } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

import { GitHubLogo } from './assets/GitHubLogo';
import { LinkedInLogo } from './assets/LinkedInLogo';
import { Logo } from './assets/Logo';
import { SeekLogo } from './assets/SeekLogo';
import { YouTubeLogo } from './assets/YouTubeLogo';

const Profiles = () => {
  const { linkedInHref, youTubeHref, gitHubHref, seekHref } = useResumeData();

  return (
    <Inline space="small" alignY="center" align="left">
      <Box justifyContent="center">
        <Text weight="strong" tone="promote" size="small">
          My Profiles
        </Text>
      </Box>
      <Inline space="xxsmall" align="left" alignY="center">
        <Logo href={seekHref} logo={<SeekLogo />} />
        <Logo href={linkedInHref} logo={<LinkedInLogo />} />
        <Logo href={youTubeHref} logo={<YouTubeLogo />} />
        <Logo href={gitHubHref} logo={<GitHubLogo />} />
      </Inline>
    </Inline>
  );
};

export default Profiles;

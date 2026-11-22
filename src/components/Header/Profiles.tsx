import { Text, Inline, Stack } from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

import { GitHubLogo } from './assets/GitHubLogo';
import { LinkedInLogo } from './assets/LinkedInLogo';
import { Logo } from './assets/Logo';
import { YouTubeLogo } from './assets/YouTubeLogo';
import { SeekLogo } from './assets/SeekLogo';

const Profiles = () => {
  const { linkedInHref, youTubeHref, gitHubHref, seekHref } = useResumeData();

  return (
    <Stack space="small">
      <Text
        weight="strong"
        tone="promote"
        size="small"
        align={{ mobile: 'center', tablet: 'left' }}
      >
        My Profiles
      </Text>
      <Inline
        space="xxsmall"
        collapseBelow="tablet"
        align={{ mobile: 'left', tablet: 'center' }}
      >
        <Logo href={seekHref} logo={<SeekLogo />} />
        <Logo href={linkedInHref} logo={<LinkedInLogo />} />
        <Logo href={youTubeHref} logo={<YouTubeLogo />} />
        <Logo href={gitHubHref} logo={<GitHubLogo />} />
      </Inline>
    </Stack>
  );
};

export default Profiles;

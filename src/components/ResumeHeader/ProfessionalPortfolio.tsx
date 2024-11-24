import {
  Hidden,
  Stack,
  ContentBlock,
  Box,
  Text,
  Inline,
} from 'braid-design-system';

import { GitHubLogo } from './assets/GitHubLogo';
import { LinkedInLogo } from './assets/LinkedInLogo';
import { YouTubeLogo } from './assets/YouTubeLogo';

export const ProfessionalPortfolio = () => (
  <>
    <Hidden print above="mobile">
      <Stack space="small">
        <ContentBlock width="medium">
          <Box
            style={{
              height: '24px',
            }}
          >
            <Text weight="strong" tone="promote" size="small">
              Professional Profiles
            </Text>
          </Box>
          <Stack space="xxsmall">
            <YouTubeLogo />
            <LinkedInLogo />
            <GitHubLogo />
            <LinkedInLogo />
            <YouTubeLogo />
            <GitHubLogo />
          </Stack>
        </ContentBlock>
      </Stack>
    </Hidden>
    <Hidden print below="tablet">
      <Inline space="small">
        <ContentBlock width="medium">
          <Box
            style={{
              height: '24px',
            }}
          >
            <Text weight="strong" tone="promote" size="small">
              Professional Profiles
            </Text>
          </Box>
          <Inline space="xxsmall">
            <LinkedInLogo />
            <YouTubeLogo />
            <GitHubLogo />
            <LinkedInLogo />
            <YouTubeLogo />
            <GitHubLogo />
          </Inline>
        </ContentBlock>
      </Inline>
    </Hidden>
  </>
);

export default ProfessionalPortfolio;

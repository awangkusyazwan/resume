import 'braid-design-system/reset';

import { BraidProvider, Hidden } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { StrictMode } from 'react';

import OnlineResume from './OnlineResume';
import PaperResume from './PaperResume';
interface AppProps {
  environment: 'development' | 'production';
}

export default ({ environment }: AppProps) => (
  <StrictMode>
    <BraidProvider theme={seekJobs}>
      <Hidden print>
        <OnlineResume />
      </Hidden>
      <Hidden screen>
        <PaperResume />
      </Hidden>
    </BraidProvider>
  </StrictMode>
);

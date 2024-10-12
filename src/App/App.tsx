import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { StrictMode } from 'react';

import Resume from './Resume';

interface AppProps {
  environment: 'development' | 'production';
}

export default ({ environment }: AppProps) => (
  <StrictMode>
    <BraidProvider theme={seekJobs}>
      <Resume />
    </BraidProvider>
  </StrictMode>
);

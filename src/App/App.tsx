import { BraidProvider } from 'braid-design-system';
import seekJobs from 'braid-design-system/themes/seekJobs';
import { StrictMode } from 'react';
import loadable from 'sku/@loadable/component';
import { Routes, Route } from 'react-router-dom';

const Home = loadable(() => import('./OnlineResume'));
const PrintableResume = loadable(() => import('./PrintableResume'));

export default () => (
  <StrictMode>
    <BraidProvider theme={seekJobs}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/printable" element={<PrintableResume />} />
      </Routes>
    </BraidProvider>
  </StrictMode>
);

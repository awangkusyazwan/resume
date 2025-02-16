import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App/App';

export default () => {
  hydrateRoot(
    document.getElementById('app')!,
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
};

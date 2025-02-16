import { hydrateRoot } from 'react-dom/client';

import App from './App/App';
import { BrowserRouter } from 'node_modules/react-router-dom/dist';

export default () => {
  hydrateRoot(
    document.getElementById('app')!,
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
};

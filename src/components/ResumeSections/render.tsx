import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import type { Render } from 'sku';

import App from '.';

export default {
  renderApp: ({ SkuProvider, route }) =>
    renderToString(
      <SkuProvider>
        <StaticRouter location={route}>
          <App />
        </StaticRouter>
      </SkuProvider>,
    ),

  renderDocument: ({ app, bodyTags, headTags }) => `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Syazwan's Resume</title>
          <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
          ${headTags}
        </head>
        <body>
          <div id="app">${app}</div>
          ${bodyTags}
        </body>
      </html>
    `,
} satisfies Render;

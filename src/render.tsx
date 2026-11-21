import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import type { Render } from 'sku';

import App from './App/App';
import { colorModeInitializationScript } from './utils/colorMode';

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
          <meta charset="utf-8">
          <title>Syazwan's Resume</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="icon" type="image/svg+xml" href="/favicon.svg">
          ${
            colorModeInitializationScript
              ? `<script>${colorModeInitializationScript}</script>`
              : ''
          }
          ${headTags}
        </head>
        <body>
          <div id="app">${app}</div>
          ${bodyTags}
        </body>
      </html>
    `,
} satisfies Render;

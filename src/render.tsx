import { renderToString } from 'react-dom/server';
import type { Render } from 'sku';

import App from './App/App';

interface RenderContext {
  html: string;
  otherThing: number;
}

export default {
  renderApp: () => ({
    html: renderToString(<App />),
    otherThing: 10,
  }),

  renderDocument: ({ app, headTags, bodyTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Resume</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${headTags}
      </head>
      <body>
        <div id="app">${app.html}</div>
        ${bodyTags}
      </body>
    </html>
  `,
} satisfies Render<RenderContext>;

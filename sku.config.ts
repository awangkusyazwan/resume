import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  routes: ['/', '/printable'],
  publicPath: 'https://resume.awangkusyazwan.work',
};

export default skuConfig;

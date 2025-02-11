import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  renderEntry: 'src/render.tsx',
  environments: ['development', 'production'],
  publicPath: 'src',
};

export default skuConfig;

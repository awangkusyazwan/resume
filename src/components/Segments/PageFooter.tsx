import { Spread, Secondary, Notice, TextLink, Text } from 'braid-design-system';

export const PageFooter = () => {
  const author = 'Awangku Muhammad Syazwan bin Awangku Sazali';

  const currentYear = new Date().getFullYear();

  const hrefForSKU = 'https://seek-oss.github.io/sku/#/';
  const hrefForBraid = 'https://seek-oss.github.io/braid-design-system/';
  const hrefForReact = 'https://react.dev/';

  return (
    <Spread direction="horizontal" space="small">
      <Text size="xsmall">
        <Secondary>
          2022 - {currentYear} © {author}
        </Secondary>
      </Text>
      <Notice tone="info">
        <Text size="xsmall">
          This resume is powered by <TextLink href={hrefForSKU}>SKU</TextLink>,{' '}
          <TextLink href={hrefForBraid}>Braid</TextLink>, and{' '}
          <TextLink href={hrefForReact}>React</TextLink> library.
        </Text>
      </Notice>
    </Spread>
  );
};

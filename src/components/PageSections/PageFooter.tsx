import { Spread, Secondary, Notice, Link, Text } from "braid-design-system"

export const PageFooter = () => {

    return (
        <Spread direction="horizontal" space="small">
      <Text size="xsmall">
        <Secondary>
          2024 © Awangku Muhammad Syazwan bin Awangku Sazali
        </Secondary>
      </Text>
      <Notice tone="info">
        <Text size="xsmall">
          This resume is powered by <Link href="">SKU</Link>,{' '}
          <Link href="">Braid</Link>, and{' '}<Link href="">React library</Link>.
        </Text>
      </Notice>
    </Spread>
    )
}
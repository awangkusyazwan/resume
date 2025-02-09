import {
  Stack,
  Inline,
  Box,
  TooltipRenderer,
  IconInfo,
  IconMail,
  TextLink,
  IconPhone,
  IconGlobe,
  Text,
} from 'braid-design-system';

const PointsOfContact = () => (
  <>
    <Stack space="xxsmall">
      <Inline space="xxsmall" alignY="center">
        <Box
          style={{
            height: '12px',
          }}
        >
          <Text weight="strong" tone="promote" size="small">
            Points-of-contact
          </Text>
        </Box>
        <TooltipRenderer
          id="point-of-contact-tooltip"
          tooltip={<Text>This is always up-to-date!</Text>}
        >
          {({ triggerProps }) => (
            <Box aria-label="Points of contact" {...triggerProps}>
              <IconInfo size="xsmall" tone="positive" />
            </Box>
          )}
        </TooltipRenderer>
      </Inline>
      <Text size="small" icon={<IconMail tone="positive" />}>
        <TextLink href="mailto:me@awangkusyazwan.work">
          me@awangkusyazwan.work
        </TextLink>
      </Text>
      <Text size="small" icon={<IconPhone tone="positive" />}>
        <TextLink href="tel:+601154104995">+601154104995</TextLink>
      </Text>
      <Text size="small" icon={<IconGlobe tone="positive" />}>
        <TextLink href="https://awangkusyazwan.work">
          awangkusyazwan.work
        </TextLink>
      </Text>
    </Stack>
    <Box
      style={{
        height: '18px',
      }}
    />
  </>
);

export default PointsOfContact;

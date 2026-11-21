import {
  Stack,
  Box,
  IconMail,
  TextLink,
  IconPhone,
  IconGlobe,
  Text,
} from 'braid-design-system';

import { useResumeData } from '../contexts/ResumeData';

const PointsOfContact = () => {
  const { email, website, phoneNumber, emailHref, websiteHref, telNoHref } =
    useResumeData();

  return (
    <>
      <Stack space="xxsmall">
        <Text
          weight="strong"
          tone="promote"
          align={{ mobile: 'center', tablet: 'left' }}
          size="small"
        >
          Points-of-contact
        </Text>
        <Text size="small" icon={<IconMail tone="positive" />}>
          <TextLink href={emailHref} aria-label="email">
            {email}
          </TextLink>
        </Text>
        <Text size="small" icon={<IconPhone tone="positive" />}>
          <TextLink href={telNoHref} aria-label="phone-number">
            {phoneNumber}
          </TextLink>
        </Text>
        <Text size="small" icon={<IconGlobe tone="positive" />}>
          <TextLink href={websiteHref} aria-label="website">
            {website}
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
};

export default PointsOfContact;

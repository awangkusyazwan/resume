import {
  Box,
  ButtonIcon,
  ButtonLink,
  ContentBlock,
  Hidden,
  IconNewWindow,
  IconPrint,
  Inline,
  Stack,
  Text,
  Toggle,
} from 'braid-design-system';
import { useEffect, useState } from 'react';

import {
  applyColorMode,
  getColorMode,
  setColorMode,
} from '../../utils/colorMode';
import { useResumeData } from '../contexts/ResumeData';

const NavBar = () => {
  const { nickname, websiteHref } = useResumeData();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const colorMode = getColorMode();
    setIsDark(colorMode === 'dark');
    applyColorMode(colorMode);
  }, []);

  const handleColorModeChange = (dark: boolean) => {
    setIsDark(dark);
    setColorMode(dark ? 'dark' : 'light');
  };

  const handlePrint = () => {
    const printWindow = window.open('/printable?print=1', '_blank');

    if (!printWindow) {
      return;
    }

    printWindow.addEventListener(
      'load',
      () => {
        const print = () => {
          printWindow.focus();
          printWindow.print();
        };

        if (printWindow.document.fonts) {
          printWindow.document.fonts.ready.then(print);
        } else {
          print();
        }
      },
      { once: true },
    );
  };

  return (
    <Box
      component="nav"
      background="brand"
      paddingY={{ mobile: 'small', tablet: 'xsmall' }}
      paddingX="small"
      position="sticky"
      top={0}
      zIndex="sticky"
    >
      <ContentBlock width="medium">
        <Stack space="small">
          {/* Mobile: Stacked layout */}
          <Hidden above="mobile">
            <Stack space="small">
              <Box
                display="flex"
                justifyContent="spaceBetween"
                alignItems="center"
              >
                <Text size="standard" weight="strong">
                  {nickname}&apos;s Resume
                </Text>
                <Toggle
                  label="Dark"
                  size="small"
                  on={isDark}
                  onChange={handleColorModeChange}
                />
              </Box>
              <Inline space="small" alignY="center">
                <ButtonIcon
                  icon={<IconPrint />}
                  label="Print"
                  id="print-mobile"
                  size="small"
                  onClick={handlePrint}
                />
                <ButtonLink
                  href={websiteHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  size="small"
                  icon={<IconNewWindow />}
                >
                  Portfolio
                </ButtonLink>
              </Inline>
            </Stack>
          </Hidden>

          {/* Tablet and above: Horizontal layout */}
          <Hidden below="tablet">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="spaceBetween"
            >
              <Text size="large" weight="strong">
                {nickname}&apos;s Resume
              </Text>
              <Inline space="small" alignY="center">
                <Toggle
                  label="Dark mode"
                  size="small"
                  on={isDark}
                  onChange={handleColorModeChange}
                />
                <ButtonIcon
                  icon={<IconPrint />}
                  label="Print resume"
                  id="print-desktop"
                  size="small"
                  onClick={handlePrint}
                />
                <ButtonLink
                  href={websiteHref}
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  size="small"
                  icon={<IconNewWindow />}
                >
                  Portfolio
                </ButtonLink>
              </Inline>
            </Box>
          </Hidden>
        </Stack>
      </ContentBlock>
    </Box>
  );
};

export default NavBar;

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
import { useEffect, useRef, useState } from 'react';

import {
  applyColorMode,
  getColorMode,
  setColorMode,
} from '../../utils/colorMode';
import { useResumeData } from '../contexts/ResumeData';

const NavBar = () => {
  const { nickname, websiteHref } = useResumeData();
  const [isDark, setIsDark] = useState(false);
  const printFrameRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const colorMode = getColorMode();
    setIsDark(colorMode === 'dark');
    applyColorMode(colorMode);
  }, []);

  useEffect(
    () => () => {
      printFrameRef.current?.remove();
    },
    [],
  );

  const handleColorModeChange = (dark: boolean) => {
    setIsDark(dark);
    setColorMode(dark ? 'dark' : 'light');
  };

  const handlePrint = () => {
    printFrameRef.current?.remove();

    const printFrame = document.createElement('iframe');
    printFrame.src = '/printable?print=1';
    printFrame.title = 'Printable resume';
    printFrame.setAttribute('aria-hidden', 'true');
    printFrame.style.position = 'fixed';
    printFrame.style.top = '0';
    printFrame.style.left = '-10000px';
    printFrame.style.width = '1024px';
    printFrame.style.height = '768px';
    printFrame.style.border = '0';

    printFrame.onload = () => {
      const printWindow = printFrame.contentWindow;

      if (!printWindow) {
        printFrame.remove();
        return;
      }

      const print = () => {
        printWindow.focus();
        printWindow.print();
        window.setTimeout(() => printFrame.remove(), 1000);
      };

      if (printWindow.document.fonts) {
        printWindow.document.fonts.ready.then(print);
      } else {
        print();
      }
    };

    printFrame.onerror = () => printFrame.remove();

    printFrameRef.current = printFrame;
    document.body.appendChild(printFrame);
  };

  return (
    <Box
      component="nav"
      background="brand"
      paddingY={{ mobile: 'small', tablet: 'xsmall' }}
      paddingX="small"
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

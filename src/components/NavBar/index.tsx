import {
  Box,
  Button,
  ButtonLink,
  ContentBlock,
  IconNewWindow,
  IconPrint,
  IconTip,
  Inline,
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
    <Box component="nav" background="brand" paddingY="xsmall" paddingX="small">
      <ContentBlock width="medium">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="spaceBetween"
          flexWrap="wrap"
        >
          <Text size="large" weight="strong">
            {nickname}&apos;s Resume
          </Text>
          <Inline space="small" alignY="center">
            <Toggle
              label={
                <Inline space="xsmall" alignY="center">
                  <IconTip />
                </Inline>
              }
              size="small"
              on={isDark}
              onChange={handleColorModeChange}
            />
            <Button
              variant="ghost"
              size="small"
              icon={<IconPrint />}
              onClick={handlePrint}
            >
              Print this resume
            </Button>
            <ButtonLink
              href={websiteHref}
              target="_blank"
              rel="noreferrer"
              variant="ghost"
              size="small"
              icon={<IconNewWindow />}
            >
              Visit my portfolio website
            </ButtonLink>
          </Inline>
        </Box>
      </ContentBlock>
    </Box>
  );
};

export default NavBar;

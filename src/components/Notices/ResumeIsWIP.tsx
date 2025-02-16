import { Alert, Box, Heading, Spread, Text } from 'braid-design-system';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

export const ResumeIsWIP = () => {
  if (global.sessionStorage.getItem('showNotice') === 'null') {
    global.sessionStorage.setItem('showNotice', 'true');
  }

  const displayNotice = global.sessionStorage.getItem('showNotice') === 'true';
  const [isVisible, setIsVisible] = useState(displayNotice);

  function handleCloseNotice() {
    setIsVisible(false);
    global.sessionStorage.setItem('showNotice', 'false');
  }

  return (
    isVisible && (
      <Fade>
        <Alert tone="positive" onClose={handleCloseNotice} closeLabel="Close">
          <Spread space="medium" direction="vertical">
            <Heading level="4"> Welcome to my online resume!</Heading>
            <Text>
              This resume is still a work-in-progress, <em>except</em> for the
              header of the resume.
            </Text>
            <Text>
              For more details, feel free to reach out via my points-of-contact,
              and I&apos;ll attempt circling back to you as soon as I can.
            </Text>
            <Text> Thank you for your understanding and kind cooperation.</Text>
          </Spread>
        </Alert>
        <Box height="touchable" />
      </Fade>
    )
  );
};

export default ResumeIsWIP;

import { Alert, Heading, Hidden, Spread, Text } from 'braid-design-system';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

export const ResumeIsWIP = () => {
  const [isVisible, setIsVisible] = useState(true);

  function handleCloseNotice() {
    setIsVisible(false);
  }
  return (
    <Hidden print>
      {isVisible && (
        <Fade>
          <Alert tone="positive" onClose={handleCloseNotice} closeLabel="Close">
            <Spread space="medium" direction="vertical">
              <Heading level="4"> Welcome to my online resume!</Heading>
              <Text>
                This resume is still a work-in-progress, <em>except</em> for the
                header of the resume.
              </Text>
              <Text>
                For more details, feel free to reach out via my
                points-of-contact, and I&apos;ll attempt circling back to you as
                soon as I can.
              </Text>
              <Text>
                {' '}
                Thank you for your understanding and kind cooperation.
              </Text>
            </Spread>
          </Alert>
        </Fade>
      )}
    </Hidden>
  );
};

export default ResumeIsWIP;

import { Alert, Heading, Hidden, Spread, Text } from "braid-design-system"
import { useState } from "react"

export const ResumeIsWIP = () => {

    const [isVisible, setIsVisible] = useState(true)

          function handleCloseNotice () {
                setIsVisible(false)
              };
              
    return ( <Hidden print>
      {isVisible && (<Alert tone="positive" onClose={handleCloseNotice} closeLabel="Close">
        <Spread space="medium" direction="vertical">
          <Heading level="4"> Welcome to my online resume!</Heading>
          <Text>
            This resume is still a work-in-progress, except for the header of
            the resume.
          </Text>
          <Text>
            For more details, feel free to reach out via my points-of-contact,
            and I'll attempt circling back to you as soon as I can.
          </Text>
          <Text> Thank you for your understanding and kind cooperation.</Text>
        </Spread>
      </Alert>)}
    </Hidden>)
}

export default ResumeIsWIP
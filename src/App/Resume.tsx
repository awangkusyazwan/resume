import { PageBlock, Box, Text, Hidden, Alert, Spread, Heading, ContentBlock, Card, Stack, Secondary, Inline, TooltipRenderer, IconInfo, IconMail, TextLink, IconPhone, IconGlobe, Columns, Column, TabsProvider, Tabs, Tab, TabPanels, TabPanel, Notice, Link } from "braid-design-system"
import { Placeholder } from "braid-design-system/playroom/components"

export const Resume = () => {
    
    return (
        <PageBlock component="main" width="medium">
  <Box height="touchable" />
  <Hidden print>
    <Alert tone="positive">
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
    </Alert>
  </Hidden>
  <Box height="touchable" />

  <ContentBlock width="medium">
  <Card>
    <Stack space="small">
      <Stack space="xsmall">
        <Heading level="4" align="left">
          Awangku Muhammad Syazwan bin Awangku Sazali
        </Heading>
        <Text size="small">
          <Secondary>BEng (Hons) • MBCS • GradIEAust</Secondary>
        </Text>
      </Stack>
      <Hidden above="mobile">
        <Stack space="xxsmall">
          <Inline space="xxsmall" alignY="center">
            <Box
              style={{
                height: "12px",
              }}
            >
              <Text weight="strong" tone="promote" size="small">
                Points-of-contact
              </Text>
            </Box>
            <TooltipRenderer id="point-of-contact-tooltip"
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
            height: "18px",
          }}
        />
        <Hidden print>
          <Stack space="small">
            <ContentBlock width="medium">
              <Box
                style={{
                  height: "24px",
                }}
              >
                <Text weight="strong" tone="promote" size="small">
                  Professional Profiles
                </Text>
              </Box>
              <Stack space="xxsmall">
                <Placeholder
                  height={40}
                  width={160}
                  label="Jobstreet Profile"
                />
                <Placeholder
                  height={40}
                  width={160}
                  label="LinkedIn Profile"
                />
                <Placeholder
                  height={40}
                  width={160}
                  label="ResearchGate Profile"
                />
                <Placeholder height={40} width={160} label="Github Profile" />
                <Placeholder height={40} width={160} label="Indeed Profile" />
                <Placeholder
                  height={40}
                  width={160}
                  label="Professional Website"
                />
              </Stack>
            </ContentBlock>
          </Stack>
        </Hidden>
      </Hidden>
      <Hidden below="tablet">
        <Columns align="center" space="none">
          <Column width="2/5">
            <Stack space="xxsmall">
              <Inline space="xxsmall" alignY="center">
                <Box
                  style={{
                    height: "12px",
                  }}
                >
                  <Text weight="strong" tone="promote" size="small">
                    Points-of-contact
                  </Text>
                </Box>
                <TooltipRenderer id="point-of-contact-tooltip"
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
          </Column>
          <Column>
            <Hidden print>
              <Stack space="none">
                <Box
                  style={{
                    height: "24px",
                  }}
                >
                  <Text weight="strong" tone="promote" size="small">
                    Professional Profiles
                  </Text>
                </Box>
                <Inline space="xxsmall">
                  <Placeholder
                    height={40}
                    width={160}
                    label="Jobstreet Profile"
                  />
                  <Placeholder
                    height={40}
                    width={160}
                    label="LinkedIn Profile"
                  />
                  <Placeholder
                    height={40}
                    width={160}
                    label="ResearchGate Profile"
                  />
                  <Placeholder
                    height={40}
                    width={160}
                    label="Github Profile"
                  />
                  <Placeholder
                    height={40}
                    width={160}
                    label="Indeed Profile"
                  />
                  <Placeholder
                    height={40}
                    width={160}
                    label="Professional Website"
                  />
                </Inline>
              </Stack>
            </Hidden>
          </Column>
        </Columns>
      </Hidden>
    </Stack>
  </Card>
</ContentBlock>


  <Hidden print>
    <Box height="touchable" />
    <TabsProvider id="tabs">
      <Stack space="medium">
        <Tabs label="tabs-for-resume-item">
          <Tab>Professional Experience </Tab>
          <Tab>Academic and Professional Credentials</Tab>
          <Tab>Volunteering and Interests</Tab>
        </Tabs>
        <TabPanels>
          <TabPanel>
            <Placeholder
              height={1200}
              label="Professional Experience Section"
            />
          </TabPanel>
          <TabPanel>
            <Placeholder
              height={1200}
              label="Academic and Professional Credentials Section"
            />
          </TabPanel>
          <TabPanel>
            <Placeholder
              height={1200}
              label="Volunteering and Interests Section"
            />
          </TabPanel>
        </TabPanels>
      </Stack>
    </TabsProvider>
  </Hidden>
  <Box height="touchable" />
  <hr />
  <Box height="touchable" />
  <Box
    style={{
      height: "36px",
    }}
    justifyContent="center"
    
  >
    <Heading level="4">
      References
    </Heading>
  </Box>
  <Placeholder height={300} label="References Section" />
  <Box height="touchable" />
  <Spread direction="horizontal" space="small">
    <Text size="xsmall">
      <Secondary>
        2024 © Awangku Muhammad Syazwan bin Awangku Sazali
      </Secondary>
    </Text>
    <Notice tone="info">
      <Text size="xsmall">
        This resume is powered by <Link>SKU</Link>, <Link>Braid</Link>, and{" "}
        <Link>React library</Link>.
      </Text>
    </Notice>
  </Spread>
  <Box height="touchable" />
</PageBlock>

    )

}

export default Resume;
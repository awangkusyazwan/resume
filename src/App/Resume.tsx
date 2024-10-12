import {
  PageBlock,
  Box,
  Text,
  Hidden,
  Alert,
  Spread,
  Heading,
  ContentBlock,
  Card,
  Stack,
  Secondary,
  Inline,
  TooltipRenderer,
  IconInfo,
  IconMail,
  TextLink,
  IconPhone,
  IconGlobe,
  Columns,
  Column,
  TabsProvider,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Notice,
  Link,
} from 'braid-design-system';

export const Resume = () => (
  <PageBlock component="main" width="medium">
    <Box height="touchable" />
    
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
            <Hidden print>
              <Stack space="small">
                <ContentBlock width="medium">
                  <Box
                    style={{
                      height: '24px',
                    }}
                  >
                    <Text weight="strong" tone="promote" size="small">
                      Professional Profiles
                    </Text>
                  </Box>
                  <Stack space="xxsmall">
                    <Box
                      style={{
                        height: '40px',
                        width: '160px',
                      }}
                      boxShadow="small"
                    />
                    <Box
                      style={{
                        height: '40px',
                        width: '160px',
                      }}
                      boxShadow="small"
                    />
                    <Box
                      style={{
                        height: '40px',
                        width: '160px',
                      }}
                      boxShadow="small"
                    />
                    <Box
                      style={{
                        height: '40px',
                        width: '160px',
                      }}
                      boxShadow="small"
                    />
                    <Box
                      style={{
                        height: '40px',
                        width: '160px',
                      }}
                      boxShadow="small"
                    />
                    <Box
                      style={{
                        height: '40px',
                        width: '160px',
                      }}
                      boxShadow="small"
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
              </Column>
              <Column>
                <Hidden print>
                  <Stack space="none">
                    <Box
                      style={{
                        height: '24px',
                      }}
                    >
                      <Text weight="strong" tone="promote" size="small">
                        Professional Profiles
                      </Text>
                    </Box>
                    <Inline space="xxsmall">
                      <Box
                        style={{
                          height: '40px',
                          width: '160px',
                        }}
                        boxShadow="small"
                      />
                      <Box
                        style={{
                          height: '40px',
                          width: '160px',
                        }}
                        boxShadow="small"
                      />
                      <Box
                        style={{
                          height: '40px',
                          width: '160px',
                        }}
                        boxShadow="small"
                      />
                      <Box
                        style={{
                          height: '40px',
                          width: '160px',
                        }}
                        boxShadow="small"
                      />
                      <Box
                        style={{
                          height: '40px',
                          width: '160px',
                        }}
                        boxShadow="small"
                      />
                      <Box
                        style={{
                          height: '40px',
                          width: '160px',
                        }}
                        boxShadow="small"
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
              <Box
                style={{
                  height: '500px',
                }}
                boxShadow="small"
              />
            </TabPanel>
            <TabPanel>
              <Box
                style={{
                  height: '500px',
                }}
                boxShadow="small"
              />
            </TabPanel>
            <TabPanel>
              <Box
                style={{
                  height: '500px',
                }}
                boxShadow="small"
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
        height: '36px',
      }}
      justifyContent="center"
    >
      <Heading level="4">References</Heading>
    </Box>
    <Box
      style={{
        height: '500px',
      }}
      boxShadow="small"
    />
    <Box height="touchable" />
    <Spread direction="horizontal" space="small">
      <Text size="xsmall">
        <Secondary>
          2024 © Awangku Muhammad Syazwan bin Awangku Sazali
        </Secondary>
      </Text>
      <Notice tone="info">
        <Text size="xsmall">
          This resume is powered by <Link href="">SKU</Link>,{' '}
          <Link href="">Braid</Link>, and
          <Link href="">React library</Link>.
        </Text>
      </Notice>
    </Spread>
    <Box height="touchable" />
  </PageBlock>
);

export default Resume;

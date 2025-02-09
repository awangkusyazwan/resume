import {
  Hidden,
  Box,
  TabsProvider,
  Stack,
  Tabs,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
} from 'braid-design-system';

export const PageContent = () => (
  <>
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
  </>
);

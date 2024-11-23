import { Hidden, Stack, ContentBlock, Box, Text, Inline } from "braid-design-system"

export const ProfessionalPortfolio = () => {

    return (
        <><Hidden print above="mobile">
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
                            boxShadow="small" />
                        <Box
                            style={{
                                height: '40px',
                                width: '160px',
                            }}
                            boxShadow="small" />
                        <Box
                            style={{
                                height: '40px',
                                width: '160px',
                            }}
                            boxShadow="small" />
                        <Box
                            style={{
                                height: '40px',
                                width: '160px',
                            }}
                            boxShadow="small" />
                        <Box
                            style={{
                                height: '40px',
                                width: '160px',
                            }}
                            boxShadow="small" />
                        <Box
                            style={{
                                height: '40px',
                                width: '160px',
                            }}
                            boxShadow="small" />
                    </Stack>
                </ContentBlock>
            </Stack>
        </Hidden>
        <Hidden print below="tablet">
                <Inline space="small">
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
                        <Inline space="xxsmall">
                            <Box
                                style={{
                                    height: '40px',
                                    width: '160px',
                                }}
                                boxShadow="small" />
                            <Box
                                style={{
                                    height: '40px',
                                    width: '160px',
                                }}
                                boxShadow="small" />
                            <Box
                                style={{
                                    height: '40px',
                                    width: '160px',
                                }}
                                boxShadow="small" />
                            <Box
                                style={{
                                    height: '40px',
                                    width: '160px',
                                }}
                                boxShadow="small" />
                            <Box
                                style={{
                                    height: '40px',
                                    width: '160px',
                                }}
                                boxShadow="small" />
                            <Box
                                style={{
                                    height: '40px',
                                    width: '160px',
                                }}
                                boxShadow="small" />
                        </Inline>
                    </ContentBlock>
                </Inline>
            </Hidden></>
            )
}

export default ProfessionalPortfolio
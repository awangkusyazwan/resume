import { ContentBlock, Card, Stack, Heading, Secondary, Hidden, Inline, Box, TooltipRenderer, IconInfo, IconMail, TextLink, Text, IconPhone, IconGlobe, Columns, Column } from "braid-design-system"
import { NameAndCredentials } from "../ResumeHeader/NameAndCredentials"
import { ResumeHeader } from "../ResumeHeader/ResumeHeader"

export const PageHeader = () => {
    return (
        <ContentBlock width="medium">
            <ResumeHeader />
    </ContentBlock>
    )
}

export default PageHeader
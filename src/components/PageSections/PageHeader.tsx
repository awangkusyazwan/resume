import type { ReactNode } from "react";
import ResumeIsWIP from "../Notices/ResumeIsWIP";


type PageHeaderProps = {
    children : ReactNode
}

export default function PageHeader({children} : PageHeaderProps) {

    return (
        <ResumeIsWIP />
    )
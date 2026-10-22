import React from "react";
import Link from "next/link";

import ContentHeader from "@/components/layout/content-header/content-header";

const AppPage: React.FunctionComponent = () => {
    return (
        <>
            <ContentHeader title="Form Layouts" breadcrumb={["Miscellaneous", "Forms"]}toc/>
            App page
            <Link href={'/'}>Home</Link>
            <Link href={'/blank'}>Blank</Link>
        </>
    );
};

export default AppPage;
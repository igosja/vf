import React from "react";
import Link from "next/link";

const AppPage: React.FunctionComponent = () => {
    return (
        <>
            App page
            <Link href={'/'}>Home</Link>
            <Link href={'/blank'}>Blank</Link>
        </>
    );
};

export default AppPage;
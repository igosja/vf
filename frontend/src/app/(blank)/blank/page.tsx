import React from "react";
import Link from "next/link";

const BlankPage: React.FunctionComponent = () => {
    return (
        <>
            Blank page
            <Link href={'/'}>Home</Link>
            <Link href={'/app'}>App</Link>
        </>
    );
};

export default BlankPage;
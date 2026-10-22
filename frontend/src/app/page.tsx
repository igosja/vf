import React from "react";
import Link from "next/link";

const HomePage: React.FunctionComponent = () => {
    return (
        <>
            Home page
            <Link href={'/app'}>App</Link>
            <Link href={'/blank'}>Blank</Link>
        </>
    );
};

export default HomePage;

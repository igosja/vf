import React from "react";

const AppLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            App layout
            {children}
        </>
    );
};

export default AppLayout;
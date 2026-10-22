import React from "react";
import Link from "next/link";

import ContentHeader from "@/components/layout/content-header/content-header";

/** Content of the 404 page. */
const NotFoundPage: React.FunctionComponent = () => {
    return (
        <div className="mx-auto w-full max-w-400 pb-4">
            <ContentHeader title="Page not found"/>
            <div className="rounded-2xl bg-card p-6">
                <p className="mb-4">This page does not exist yet.</p>
                <Link href="/">Back to the dashboard</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;

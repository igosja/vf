import React from "react";
import Link from "next/link";

import {Card} from "@/components/ui/card";

/** Content of the 404 page: a standalone card, without the sidebar and nav bar. */
const NotFoundPage: React.FunctionComponent = () => {
    return (
        <div className="flex h-screen p-5">
            <Card className="m-auto max-w-100 p-10 text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="mx-auto mb-8 w-20" src="/img/misc/coming-soon.svg" alt="404"/>
                <h2 className="mb-1 text-lg leading-tight font-medium">404</h2>
                <p className="mb-4">We&apos;re sorry that the page you&apos;re looking for does not exist. Please check the URL and try again.</p>
                <Link href="/" className="text-xs text-muted-foreground hover:text-foreground">
                    Back to home page
                </Link>
            </Card>
        </div>
    );
};

export default NotFoundPage;

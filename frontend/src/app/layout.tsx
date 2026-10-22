import type {Metadata, Viewport} from "next";
import {Figtree} from "next/font/google";
import React from "react";

import PageLoader from "@/components/layout/page-loader";
import ThemeProvider, {THEME_SCRIPT} from "@/providers/theme-provider";

import "@/styles/index.css";

const figtree = Figtree({
    variable: "--font-figtree",
    subsets: ["latin"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "Materia",
    icons: {
        icon: [
            {url: "/img/favicon/favicon.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)"},
            {url: "/img/favicon/favicon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)"},
        ],
    },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

const RootLayout = ({children}: LayoutProps<"/">) => {
    return (
        // The theme script sets the colour class on <html> before React hydrates.
        <html lang="en" className={figtree.variable} suppressHydrationWarning>
        <head>
            <script dangerouslySetInnerHTML={{__html: THEME_SCRIPT}}/>
        </head>
        <body>
        <PageLoader/>
        <ThemeProvider>{children}</ThemeProvider>
        </body>
        </html>
    );
};

export default RootLayout;

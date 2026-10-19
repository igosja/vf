"use client";

import type { ReactNode } from "react";

import { usePageLoader } from "./route-loader";

/** The frame for pages that stand alone, without the sidebar and nav bar: coming soon, error. */
export function BlankShell({ children }: { children: ReactNode }) {
	usePageLoader();

	return <>{children}</>;
}

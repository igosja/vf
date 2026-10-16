import { Outlet } from "react-router";

import { RouteLoader, usePageLoader } from "./route-loader";

/** The frame for pages that stand alone, without the sidebar and nav bar: coming soon, error. */
export function BlankShell() {
	usePageLoader();

	return (
		<>
			<Outlet />
			<RouteLoader />
		</>
	);
}

import { BlankShell } from "@/components/layout/blank-shell";

/** Pages that stand alone, without the sidebar and nav bar: sign-in, coming soon, error. */
export default function BlankLayout({ children }: { children: React.ReactNode }) {
	return <BlankShell>{children}</BlankShell>;
}

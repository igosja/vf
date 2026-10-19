import { AppShell } from "@/components/layout/app-shell";

/** Every page with the sidebar and nav bar. */
export default function AppLayout({ children }: { children: React.ReactNode }) {
	return <AppShell>{children}</AppShell>;
}

import { CircleAlert, CircleCheck, Info, LoaderCircle, TriangleAlert } from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { useTheme } from "@/providers/theme-provider";

/** Snackbars: a dark pill at the bottom of the screen, raised above the nav bar on phones. */
function Toaster(props: ToasterProps) {
	const { resolvedTheme } = useTheme();

	return (
		<Sonner
			theme={resolvedTheme}
			position="bottom-center"
			mobileOffset={{ bottom: "4.5rem" }}
			icons={{
				success: <CircleCheck />,
				info: <Info />,
				warning: <TriangleAlert />,
				error: <CircleAlert />,
				loading: <LoaderCircle className="animate-spin" />,
			}}
			toastOptions={{
				unstyled: true,
				classNames: {
					toast: "flex w-full items-center gap-3 rounded-xl bg-emphasis-foreground py-3 pr-3 pl-4 text-white dark:text-black shadow-md",
					icon: "[&_svg]:size-5",
					content: "flex flex-1 flex-col gap-1",
					title: "text-sm",
					description: "text-xs opacity-75",
					actionButton: "rounded-lg px-2 py-1 text-sm font-medium hover:bg-white/10",
					cancelButton: "rounded-lg px-2 py-1 text-sm opacity-75 hover:opacity-100",
				},
			}}
			{...props}
		/>
	);
}

export { Toaster };

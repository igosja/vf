import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return <TabsPrimitive.Root data-slot="tabs" className={cn("flex flex-col", className)} {...props} />;
}

/** A row of pills that scrolls sideways when it runs out of room. */
function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
	return <TabsPrimitive.List data-slot="tabs-list" className={cn("no-scrollbar flex gap-px overflow-x-auto font-medium", className)} {...props} />;
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(
				"flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 whitespace-nowrap text-emphasis-foreground outline-primary transition-colors duration-300 hover:bg-accent focus-visible:outline-2 data-[state=active]:bg-primary/10 data-[state=active]:text-primary",
				className
			)}
			{...props}
		/>
	);
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return <TabsPrimitive.Content data-slot="tabs-content" className={cn("outline-none", className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };

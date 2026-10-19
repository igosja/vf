import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

/** The card the login, register and password pages center on an empty screen. */
export function AuthCard({ title, description, children }: { title: string; description: ReactNode; children: ReactNode }) {
	return (
		<div className="flex min-h-screen p-5">
			<Card className="m-auto w-full max-w-100 p-8">
				<h2 className="mb-1 text-lg font-medium">{title}</h2>
				<p className="mb-6 text-muted-foreground">{description}</p>
				{children}
			</Card>
		</div>
	);
}

/** A pill field with its icon inside. The placeholder doubles as the field's accessible name. */
export function AuthField({ icon: Icon, className, ...props }: ComponentProps<"input"> & { icon: LucideIcon }) {
	return (
		<InputGroup className={cn("rounded-full", className)}>
			<InputGroupAddon>
				<Icon />
			</InputGroupAddon>
			<InputGroupInput aria-label={props.placeholder} {...props} />
		</InputGroup>
	);
}

/** The quiet links under the form. */
export const authLink = "text-xs text-muted-foreground hover:text-foreground";

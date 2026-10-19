import { X } from "lucide-react";
import type { ReactNode } from "react";

import { IconButton } from "@/components/common/icon-button";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

/** A dialog's title row with its close button. */
export function DialogHead({ children }: { children: ReactNode }) {
	return (
		<div className="flex shrink-0 items-center gap-4 p-6">
			<DialogTitle className="flex-1 text-base leading-tight font-medium text-emphasis-foreground">{children}</DialogTitle>
			<DialogClose asChild>
				<IconButton className="-my-2 -mr-2">
					<X />
					<span className="sr-only">Close</span>
				</IconButton>
			</DialogClose>
		</div>
	);
}

export function DialogFoot({ className, children }: { className?: string; children: ReactNode }) {
	return <div className={cn("flex shrink-0 items-center justify-end gap-2 p-6", className)}>{children}</div>;
}

/** Closes the dialog without doing anything. */
export function DismissButton({ children = "Cancel" }: { children?: ReactNode }) {
	return (
		<DialogClose asChild>
			<Button variant="ghost" className="text-muted-foreground hover:text-foreground">
				{children}
			</Button>
		</DialogClose>
	);
}

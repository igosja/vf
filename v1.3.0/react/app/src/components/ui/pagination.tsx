import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { buttonVariants, type Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
	return <nav role="navigation" aria-label="pagination" data-slot="pagination" className={cn("flex", className)} {...props} />;
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
	return <ul data-slot="pagination-content" className={cn("flex flex-row items-center gap-1", className)} {...props} />;
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
	return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
	isActive?: boolean;
	disabled?: boolean;
} & Pick<React.ComponentProps<typeof Button>, "size"> &
	React.ComponentProps<"a">;

/** A page number. The current page is filled; a disabled link fades out and ignores the pointer. */
function PaginationLink({ className, isActive, disabled, size = "icon", ...props }: PaginationLinkProps) {
	return (
		<a
			aria-current={isActive ? "page" : undefined}
			aria-disabled={disabled || undefined}
			data-slot="pagination-link"
			data-active={isActive}
			className={cn(
				buttonVariants({ variant: isActive ? "default" : "ghost", size }),
				!isActive && "text-emphasis-foreground",
				disabled && "pointer-events-none opacity-50",
				className
			)}
			{...props}
		/>
	);
}

function PaginationPrevious({ className, children = "Previous", ...props }: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink aria-label="Go to previous page" size="default" className={cn("gap-1 px-2.5 sm:pl-2.5", className)} {...props}>
			<ChevronLeft className="size-4" />
			<span className="hidden sm:block">{children}</span>
		</PaginationLink>
	);
}

function PaginationNext({ className, children = "Next", ...props }: React.ComponentProps<typeof PaginationLink>) {
	return (
		<PaginationLink aria-label="Go to next page" size="default" className={cn("gap-1 px-2.5 sm:pr-2.5", className)} {...props}>
			<span className="hidden sm:block">{children}</span>
			<ChevronRight className="size-4" />
		</PaginationLink>
	);
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
	return (
		<span aria-hidden data-slot="pagination-ellipsis" className={cn("flex size-10 items-center justify-center", className)} {...props}>
			<MoreHorizontal className="size-4" />
			<span className="sr-only">More pages</span>
		</span>
	);
}

export { Pagination, PaginationContent, PaginationLink, PaginationItem, PaginationPrevious, PaginationNext, PaginationEllipsis };

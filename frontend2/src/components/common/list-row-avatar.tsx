import { Avatar } from "@/components/common/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

/**
 * The avatar at the start of a selectable list row (mail, contacts). Hovering
 * the row, which carries `group/row`, swaps it for a checkbox, and the
 * checkbox stays while the row is selected.
 */
export function ListRowAvatar({
	src,
	initial,
	color,
	label,
	checked,
	onCheckedChange,
}: {
	src?: string;
	initial?: string;
	color?: string;
	label: string;
	checked: boolean;
	onCheckedChange: (checked: boolean) => void;
}) {
	return (
		<div className="grid place-items-center *:col-start-1 *:row-start-1">
			<Avatar
				src={src}
				initial={initial}
				color={color}
				className={cn("transition-opacity duration-300 group-hover/row:opacity-0", checked && "opacity-0")}
			/>
			<Checkbox
				checked={checked}
				onCheckedChange={(value) => onCheckedChange(value === true)}
				aria-label={`Select ${label}`}
				className={cn("z-1 opacity-0 transition-opacity duration-300 group-hover/row:opacity-100 focus-visible:opacity-100", checked && "opacity-100")}
			/>
		</div>
	);
}

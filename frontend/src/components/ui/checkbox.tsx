import * as React from "react";
import {cn} from "@/lib/utils";
import {CheckIcon} from "lucide-react";
import {Checkbox as CheckboxPrimitive} from "radix-ui";

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
    return (
        <CheckboxPrimitive.Root
            data-slot="checkbox"
            className={cn(
                // The ::before circle is the hover halo: it grows from half size into a soft primary ring.
                "peer relative grid size-4.5 shrink-0 place-content-center rounded-xs border-[1.5px] border-foreground transition-colors duration-300 before:absolute before:-inset-px before:scale-50 before:rounded-full before:ring-primary/15 before:transition before:duration-200 hover:before:scale-100 hover:before:ring-10 focus:border-emphasis-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary hover:focus-visible:before:ring-0 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:border-red-400 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-white",
                className
            )}
            {...props}
        >
            <CheckboxPrimitive.Indicator data-slot="checkbox-indicator" className="grid place-content-center">
                <CheckIcon className="size-3 stroke-3" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
}

export { Checkbox };

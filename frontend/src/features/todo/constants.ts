import type React from "react";

import type {Badge} from "@/components/ui/badge";

/** Badge colour for each task label. */
export const TODO_LABEL_VARIANT: Record<string, React.ComponentProps<typeof Badge>["variant"]> = {
    bug: "destructive",
    "priority:severe": "destructive",
    documentation: "positive",
    feature: "default",
    "version 2.0": "default",
    design: "default",
    discussion: "caution",
    security: "caution",
    blocked: "secondary",
    obsolete: "secondary",
};

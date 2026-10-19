"use client";

import { icons } from "lucide-react";
import { useDeferredValue, useState } from "react";
import { toast } from "sonner";

import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { Card } from "@/components/ui/card";

/** Every Lucide icon, by the component name it is imported as. */
const ICONS = Object.entries(icons).map(([name, Icon]) => ({ name, search: name.toLowerCase(), Icon }));

export default function Icons() {
	const [query, setQuery] = useState("");
	const deferred = useDeferredValue(query.trim().toLowerCase());
	const matches = deferred ? ICONS.filter((item) => item.search.includes(deferred.replace(/[\s-]/g, ""))) : ICONS;

	const copy = (name: string) => {
		navigator.clipboard?.writeText(`<${name} />`).catch(() => {});
		toast(`Copied <${name} />`);
	};

	return (
		<div className="pb-4">
			<ContentHeader title="Icons">
				<div className="hidden text-muted-foreground sm:block">{ICONS.length} Lucide icons</div>
				<SearchField
					className="ml-auto w-full max-w-100"
					placeholder="Search icons..."
					aria-label="Search icons"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					shortcut
				/>
			</ContentHeader>

			<Card className="p-3">
				{matches.length ? (
					<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-8">
						{matches.map(({ name, Icon }) => (
							<button
								key={name}
								type="button"
								title={`Copy <${name} />`}
								onClick={() => copy(name)}
								className="flex min-w-0 flex-col items-center gap-2 rounded-xl p-3 text-center transition-colors hover:bg-accent"
							>
								<Icon className="size-7 text-emphasis-foreground" />
								<span className="hidden w-full truncate text-xs text-muted-foreground sm:block">{name}</span>
								<span className="sr-only sm:hidden">{name}</span>
							</button>
						))}
					</div>
				) : (
					<p className="p-10 text-center text-muted-foreground">No icons match "{query}".</p>
				)}
			</Card>
		</div>
	);
}

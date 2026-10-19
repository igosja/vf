"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Field, FieldLabel } from "@/components/ui/field";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const COUNTRIES = [
	{ value: "australia", label: "Australia" },
	{ value: "canada", label: "Canada" },
	{ value: "germany", label: "Germany" },
	{ value: "japan", label: "Japan" },
	{ value: "sweden", label: "Sweden" },
	{ value: "united-kingdom", label: "United Kingdom" },
	{ value: "united-states", label: "United States" },
];

export default function ComboboxPage() {
	const [open, setOpen] = useState(false);
	const [country, setCountry] = useState("");

	return (
		<>
			<ContentHeader title="Combobox" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A select with a search box, for lists too long to scroll through.">
					<Field className="w-64">
						<FieldLabel htmlFor="combobox-country">Country</FieldLabel>
						<Popover open={open} onOpenChange={setOpen}>
							<PopoverTrigger asChild>
								<Button
									id="combobox-country"
									variant="outline"
									role="combobox"
									aria-expanded={open}
									data-empty={!country}
									className="w-64 justify-between rounded-sm px-3.5 data-[empty=true]:text-muted-foreground"
								>
									{country ? COUNTRIES.find((item) => item.value === country)?.label : "Select a country..."}
									<ChevronsUpDown className="size-4 text-muted-foreground" />
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-64 p-0" align="start">
								<Command>
									<CommandInput placeholder="Search country..." />
									<CommandList>
										<CommandEmpty>No country found.</CommandEmpty>
										<CommandGroup>
											{COUNTRIES.map((item) => (
												<CommandItem
													key={item.value}
													value={item.value}
													onSelect={(value) => {
														setCountry(value === country ? "" : value);
														setOpen(false);
													}}
												>
													{item.label}
													<Check className={cn("ml-auto size-4", country === item.value ? "opacity-100" : "opacity-0")} />
												</CommandItem>
											))}
										</CommandGroup>
									</CommandList>
								</Command>
							</PopoverContent>
						</Popover>
					</Field>
				</ExampleCard>
			</div>
		</>
	);
}

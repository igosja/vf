import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from "@/components/ui/popover";

export default function PopoverPage() {
	return (
		<>
			<ContentHeader title="Popover" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Basic" description="A title and description in a panel by the trigger.">
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline">Open Popover</Button>
						</PopoverTrigger>
						<PopoverContent align="start">
							<PopoverHeader>
								<PopoverTitle>Dimensions</PopoverTitle>
								<PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
							</PopoverHeader>
						</PopoverContent>
					</Popover>
				</ExampleCard>

				<ExampleCard title="Align" description="Line the panel up with the trigger's start, centre or end.">
					<div className="flex gap-4">
						{(["start", "center", "end"] as const).map((align) => (
							<Popover key={align}>
								<PopoverTrigger asChild>
									<Button variant="outline" size="sm" className="capitalize">
										{align}
									</Button>
								</PopoverTrigger>
								<PopoverContent align={align} className="w-40">
									Aligned to {align}
								</PopoverContent>
							</Popover>
						))}
					</div>
				</ExampleCard>

				<ExampleCard title="With form" description="A popover can hold a few fields.">
					<Popover>
						<PopoverTrigger asChild>
							<Button variant="outline">Open Popover</Button>
						</PopoverTrigger>
						<PopoverContent className="w-72" align="start">
							<PopoverHeader className="mb-4">
								<PopoverTitle>Dimensions</PopoverTitle>
								<PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
							</PopoverHeader>
							<FieldGroup className="gap-4">
								<Field orientation="horizontal">
									<FieldLabel htmlFor="popover-width" className="w-1/2">
										Width
									</FieldLabel>
									<Input id="popover-width" defaultValue="100%" />
								</Field>
								<Field orientation="horizontal">
									<FieldLabel htmlFor="popover-height" className="w-1/2">
										Height
									</FieldLabel>
									<Input id="popover-height" defaultValue="25px" />
								</Field>
							</FieldGroup>
						</PopoverContent>
					</Popover>
				</ExampleCard>
			</div>
		</>
	);
}

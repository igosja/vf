import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const LOREM =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function SheetPage() {
	return (
		<>
			<ContentHeader title="Sheet" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A panel slides in from the right with a form.">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline">Open</Button>
						</SheetTrigger>
						<SheetContent>
							<SheetHeader>
								<SheetTitle>Edit profile</SheetTitle>
								<SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
							</SheetHeader>
							<FieldGroup className="px-4">
								<Field>
									<FieldLabel htmlFor="sheet-name">Name</FieldLabel>
									<Input id="sheet-name" defaultValue="Alex Morgan" />
								</Field>
								<Field>
									<FieldLabel htmlFor="sheet-username">Username</FieldLabel>
									<Input id="sheet-username" defaultValue="@alexmorgan" />
								</Field>
							</FieldGroup>
							<SheetFooter>
								<Button type="submit">Save changes</Button>
								<SheetClose asChild>
									<Button variant="outline">Close</Button>
								</SheetClose>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</ExampleCard>

				<ExampleCard title="Side" description="Open the sheet from the top, right, bottom or left.">
					<div className="flex flex-wrap gap-2">
						{(["top", "right", "bottom", "left"] as const).map((side) => (
							<Sheet key={side}>
								<SheetTrigger asChild>
									<Button variant="outline" className="capitalize">
										{side}
									</Button>
								</SheetTrigger>
								<SheetContent side={side} className={side === "top" || side === "bottom" ? "max-h-1/2" : undefined}>
									<SheetHeader>
										<SheetTitle>Edit profile</SheetTitle>
										<SheetDescription>Make changes to your profile here. Click save when you&apos;re done.</SheetDescription>
									</SheetHeader>
									<div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-4">
										{Array.from({ length: 10 }, (_, index) => (
											<p key={index} className="mb-2 leading-relaxed">
												{LOREM}
											</p>
										))}
									</div>
									<SheetFooter>
										<Button type="submit">Save changes</Button>
										<SheetClose asChild>
											<Button variant="outline">Cancel</Button>
										</SheetClose>
									</SheetFooter>
								</SheetContent>
							</Sheet>
						))}
					</div>
				</ExampleCard>

				<ExampleCard title="No close button" description="Set showCloseButton to false; a click outside still closes it.">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="outline">Open Sheet</Button>
						</SheetTrigger>
						<SheetContent showCloseButton={false}>
							<SheetHeader>
								<SheetTitle>No Close Button</SheetTitle>
								<SheetDescription>
									This sheet doesn&apos;t have a close button in the top-right corner. Click outside to close.
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</ExampleCard>
			</div>
		</>
	);
}

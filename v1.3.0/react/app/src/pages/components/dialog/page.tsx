import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const LOREM =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

/** Ten paragraphs in a box that scrolls. */
function LongContent() {
	return (
		<div className="-mx-6 no-scrollbar max-h-96 overflow-y-auto px-6">
			{Array.from({ length: 10 }, (_, index) => (
				<p key={index} className="mb-4">
					{LOREM}
				</p>
			))}
		</div>
	);
}

export default function DialogPage() {
	return (
		<>
			<ContentHeader title="Dialog" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A form in a dialog, with Cancel and Save in the footer.">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">Open Dialog</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-sm">
							<form className="grid gap-6" onSubmit={(event) => event.preventDefault()}>
								<DialogHeader>
									<DialogTitle>Edit profile</DialogTitle>
									<DialogDescription>Make changes to your profile here. Click save when you&apos;re done.</DialogDescription>
								</DialogHeader>
								<FieldGroup>
									<Field>
										<FieldLabel htmlFor="dialog-name">Name</FieldLabel>
										<Input id="dialog-name" name="name" defaultValue="Alex Morgan" />
									</Field>
									<Field>
										<FieldLabel htmlFor="dialog-username">Username</FieldLabel>
										<Input id="dialog-username" name="username" defaultValue="@alexmorgan" />
									</Field>
								</FieldGroup>
								<DialogFooter>
									<DialogClose asChild>
										<Button variant="outline">Cancel</Button>
									</DialogClose>
									<Button type="submit">Save changes</Button>
								</DialogFooter>
							</form>
						</DialogContent>
					</Dialog>
				</ExampleCard>

				<ExampleCard title="Custom close button" description="DialogClose turns any button into a close button.">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">Share</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-md">
							<DialogHeader>
								<DialogTitle>Share link</DialogTitle>
								<DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
							</DialogHeader>
							<Input aria-label="Link" defaultValue="https://example.com/docs/installation" readOnly />
							<DialogFooter className="sm:justify-start">
								<DialogClose asChild>
									<Button type="button">Close</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</ExampleCard>

				<ExampleCard title="No close button" description="Set showCloseButton to false to drop the corner button.">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">No Close Button</Button>
						</DialogTrigger>
						<DialogContent showCloseButton={false}>
							<DialogHeader>
								<DialogTitle>No Close Button</DialogTitle>
								<DialogDescription>This dialog doesn&apos;t have a close button in the top-right corner.</DialogDescription>
							</DialogHeader>
						</DialogContent>
					</Dialog>
				</ExampleCard>

				<ExampleCard title="Sticky footer" description="The footer stays in view while the content scrolls.">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">Sticky Footer</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Sticky Footer</DialogTitle>
								<DialogDescription>This dialog has a sticky footer that stays visible while the content scrolls.</DialogDescription>
							</DialogHeader>
							<LongContent />
							<DialogFooter>
								<DialogClose asChild>
									<Button variant="outline">Close</Button>
								</DialogClose>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</ExampleCard>

				<ExampleCard title="Scrollable content" description="Long content scrolls inside the dialog.">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">Scrollable Content</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Scrollable Content</DialogTitle>
								<DialogDescription>This is a dialog with scrollable content.</DialogDescription>
							</DialogHeader>
							<LongContent />
						</DialogContent>
					</Dialog>
				</ExampleCard>
			</div>
		</>
	);
}

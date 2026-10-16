import { RichTextEditor } from "@/components/common/rich-text-editor";
import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Field, FieldDescription, FieldTitle } from "@/components/ui/field";

export default function RichTextEditorPage() {
	return (
		<>
			<ContentHeader title="Rich Text Editor" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A WYSIWYG editor for formatted text, lists, links and images, that outputs clean HTML.">
					<Field>
						<FieldTitle>Announcement</FieldTitle>
						<RichTextEditor className="rounded-sm border border-input" placeholder="Write something..." />
						<FieldDescription>Select text to format it, or start a line with a dash for a list.</FieldDescription>
					</Field>
				</ExampleCard>
			</div>
		</>
	);
}

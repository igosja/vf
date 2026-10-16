import { useEffect, useState } from "react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

/** Starts low, then moves on once the page has loaded. */
function LoadingProgress() {
	const [progress, setProgress] = useState(13);

	useEffect(() => {
		const timer = window.setTimeout(() => setProgress(66), 500);
		return () => window.clearTimeout(timer);
	}, []);

	return <Progress value={progress} className="w-3/5" />;
}

function ControlledProgress() {
	const [value, setValue] = useState([50]);

	return (
		<div className="flex max-w-sm flex-col gap-6">
			<Progress value={value[0]} />
			<Slider value={value} onValueChange={setValue} min={0} max={100} step={1} aria-label="Progress" />
		</div>
	);
}

export default function ProgressPage() {
	return (
		<>
			<ContentHeader title="Progress" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="The bar animates to each new value.">
					<LoadingProgress />
				</ExampleCard>

				<ExampleCard title="Label" description="A label and the value above the bar.">
					<Field className="max-w-sm">
						<FieldLabel htmlFor="progress-upload" className="w-full">
							<span>Upload progress</span>
							<span className="ml-auto">66%</span>
						</FieldLabel>
						<Progress value={66} id="progress-upload" />
					</Field>
				</ExampleCard>

				<ExampleCard title="Controlled" description="Drive the value from state, here set by a slider.">
					<ControlledProgress />
				</ExampleCard>
			</div>
		</>
	);
}

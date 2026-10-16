import { useState } from "react";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Field, FieldDescription, FieldTitle } from "@/components/ui/field";
import { Slider } from "@/components/ui/slider";

export default function SliderPage() {
	const [volume, setVolume] = useState([40]);
	const [price, setPrice] = useState([200, 800]);

	return (
		<>
			<ContentHeader title="Slider" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="Drag, click or use the arrow keys to pick a value.">
					<Field className="max-w-sm">
						<FieldTitle>Volume</FieldTitle>
						<FieldDescription>
							Set to <span className="font-medium tabular-nums">{volume[0]}%</span>.
						</FieldDescription>
						<Slider value={volume} onValueChange={setVolume} className="mt-2" aria-label="Volume" />
					</Field>
				</ExampleCard>

				<ExampleCard title="Range" description="Two handles pick a range.">
					<Field className="max-w-sm">
						<FieldTitle>Price Range</FieldTitle>
						<FieldDescription>
							Set your budget range ($<span className="font-medium tabular-nums">{price[0]}</span> -{" "}
							<span className="font-medium tabular-nums">{price[1]}</span>).
						</FieldDescription>
						<Slider value={price} onValueChange={setPrice} max={1000} step={10} className="mt-2" aria-label="Price Range" />
					</Field>
				</ExampleCard>
			</div>
		</>
	);
}

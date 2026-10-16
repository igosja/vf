import { Card } from "@/components/ui/card";
import { USER } from "@/data/user";

/** The photo and short bio beside the profile and timeline. */
export function UserAbout() {
	return (
		<Card className="mt-32 mb-2 shrink-0 p-0 lg:mt-0 lg:w-72">
			<div className="-mt-24 -mb-1 p-2 lg:mt-0">
				<img className="mx-auto w-48 rounded-lg lg:w-full" src={USER.avatar} alt="" />
			</div>

			<div className="p-5">
				<div className="mb-5 flex items-start">
					<div className="flex-1">
						<h2 className="mb-1 text-base leading-tight font-medium">{USER.name}</h2>
						<div className="text-sm text-muted-foreground">{USER.handle}</div>
					</div>
					<i className="mt-1 size-2 rounded-full bg-emerald-500" />
				</div>

				<p className="mb-5">{USER.bio}</p>

				<ul className="flex flex-col gap-4">
					{USER.facts.map((fact) => (
						<li key={fact.label} className="flex items-center gap-3">
							<fact.icon />
							{fact.label}
						</li>
					))}
				</ul>
			</div>
		</Card>
	);
}

import { CircleEllipsis, CirclePlus, Info, Settings } from "lucide-react";

import { ActionButton } from "@/components/common/action-button";
import { IconButton } from "@/components/common/icon-button";
import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { Card } from "@/components/ui/card";
import { TEAMS } from "@/data/teams";

export default function Teams() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<ContentHeader title="Teams and Members">
				<SearchField className="ml-6 hidden w-full max-w-140 lg:flex" placeholder="Search Teams..." aria-label="Search teams" shortcut />

				<div className="ml-auto flex gap-1.5">
					<IconButton className="hidden sm:grid">
						<Info />
						<span className="sr-only">Information</span>
					</IconButton>
					<IconButton className="hidden sm:grid">
						<Settings />
						<span className="sr-only">Settings</span>
					</IconButton>
					<IconButton>
						<CircleEllipsis />
						<span className="sr-only">More</span>
					</IconButton>
				</div>
			</ContentHeader>

			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{TEAMS.map((team) => (
					<Card key={team.title} className="p-1">
						<img className="h-32 w-full rounded-xl object-cover" src={team.cover} alt="" />

						<div className="p-5 text-center">
							<h3 className="mb-2 font-bold">{team.title}</h3>
							<p className="mb-5 text-muted-foreground">{team.description}</p>

							<div className="mb-2 flex items-center justify-center gap-1">
								{team.members.map((member, index) => (
									<img key={index} className="avatar-mask size-7" src={member.avatar} alt={member.name} title={member.name} />
								))}
							</div>

							<div className="text-xs text-muted-foreground">{team.count} Members</div>
						</div>
					</Card>
				))}
			</div>

			<ActionButton floating className="xl:inline-flex">
				<CirclePlus />
				<span className="hidden md:inline">Create Team</span>
			</ActionButton>
		</div>
	);
}

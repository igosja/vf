"use client";

import { BriefcaseBusiness, GraduationCap, type LucideIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import { EDUCATION, WORK_EXPERIENCES, type Milestone } from "@/data/user";

import { UserAbout } from "../user-about";
import { UserCover } from "../user-cover";
import { UserHeader } from "../user-header";

/** A card of dated milestones, each beside an icon tile, with a link to the rest. */
function Milestones({ title, icon: Icon, items, more }: { title: string; icon: LucideIcon; items: Milestone[]; more: string }) {
	return (
		<Card>
			<h2 className="mb-6 text-base leading-tight font-medium">{title}</h2>

			<div className="mb-5 flex flex-col gap-6">
				{items.map((item) => (
					<div key={item.title} className="flex items-center gap-4">
						<div className="grid avatar-mask size-10.5 place-items-center bg-accent">
							<Icon />
						</div>
						<div className="flex-1">
							<div className="mb-1 text-emphasis-foreground">{item.title}</div>
							<div className="text-xs text-muted-foreground">{item.detail}</div>
						</div>
					</div>
				))}
			</div>

			<div className="mb-3 ml-14 border-b" />
			<a href="#" className="pl-14 text-sm">
				{more}
			</a>
		</Card>
	);
}

export default function UserProfile() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<UserHeader title="User Profile" page="Profile" />
			<UserCover />

			<div className="items-start gap-4 lg:flex">
				<UserAbout />

				<div className="flex min-w-0 flex-1 flex-col gap-4">
					<Card>
						<h2 className="mb-5 text-base leading-tight font-medium">About</h2>
						<p className="mb-4">
							I'm a passionate software engineer merging technical prowess with user-centric solutions. Armed with solid computer science
							knowledge and practical experience, I excel in diverse challenges, delivering reliable software that surpasses expectations and
							integrates the latest trends.
						</p>
						<p>
							Adaptable across languages and frameworks, I employ agile methods to ensure punctual, iterative development. Effective communication
							and collaboration amplify my ability to transform complex ideas into user-friendly interfaces. Meticulous testing, code reviews, and
							a commitment to innovation define my approach.
						</p>
					</Card>

					<Milestones title="Working Experiences" icon={BriefcaseBusiness} items={WORK_EXPERIENCES} more="Show 4 more work experiences" />
					<Milestones title="Education" icon={GraduationCap} items={EDUCATION} more="Show 4 more educations" />
				</div>
			</div>
		</div>
	);
}

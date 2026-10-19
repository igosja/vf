"use client";

import { CircleEllipsis } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CONNECTIONS } from "@/data/user";

import { UserCover, UserCoverFilter } from "../user-cover";
import { UserHeader } from "../user-header";

export default function UserConnections() {
	return (
		<div className="mx-auto w-full max-w-400 pb-4">
			<UserHeader title="User Connections" page="Connections" />
			<UserCover>
				<UserCoverFilter active>All Connections</UserCoverFilter>
				<UserCoverFilter>Work</UserCoverFilter>
				<UserCoverFilter>College</UserCoverFilter>
				<UserCoverFilter>Current City</UserCoverFilter>
				<UserCoverFilter>Following</UserCoverFilter>
				<UserCoverFilter className="ml-auto hidden md:block">Requests</UserCoverFilter>
				<UserCoverFilter className="hidden md:block">Find Connections</UserCoverFilter>
			</UserCover>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{CONNECTIONS.map((item) => (
					<Card key={item.handle} className="p-5">
						<div className="mb-5 flex items-center gap-3">
							<a href="#" className="shrink-0">
								<img className="avatar-mask size-9" src={item.avatar} alt="" />
							</a>
							<div className="min-w-0 flex-1">
								<a href="#" className="mb-0.5 block text-emphasis-foreground">
									{item.name}
								</a>
								<div className="text-xs text-muted-foreground">{item.handle}</div>
							</div>
							<DropdownMenu modal={false}>
								<DropdownMenuTrigger asChild>
									<IconButton className="self-start">
										<CircleEllipsis />
										<span className="sr-only">More</span>
									</IconButton>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Block</DropdownMenuItem>
									<DropdownMenuItem>Message</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>

						<div className="text-center">
							<Button size="sm" className="mb-1 w-40">
								Connected
							</Button>
							<div className="mt-1 text-xs text-muted-foreground">{item.mutual} Mutual</div>
						</div>
					</Card>
				))}
			</div>
		</div>
	);
}

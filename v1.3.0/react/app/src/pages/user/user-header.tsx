import { RotateCw, Settings } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { ContentHeader } from "@/components/layout/content-header";

/** The header shared by the user pages: title, trail, and reload and settings unless `actions` is off. */
export function UserHeader({ title, page, actions = true }: { title: string; page: string; actions?: boolean }) {
	return (
		<ContentHeader title={title} breadcrumb={["Application Views", "User", page]}>
			{actions && (
				<div className="ml-auto flex gap-2">
					<IconButton>
						<RotateCw />
						<span className="sr-only">Reload</span>
					</IconButton>
					<IconButton>
						<Settings />
						<span className="sr-only">Settings</span>
					</IconButton>
				</div>
			)}
		</ContentHeader>
	);
}

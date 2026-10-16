import { useState, type ReactNode } from "react";

import { SearchField } from "@/components/common/search-field";
import { ContentHeader } from "@/components/layout/content-header";
import { Card } from "@/components/ui/card";

import { ChatActionsProvider } from "./chat-actions";
import { SearchPalette } from "./search-palette";
import { AiAgentSidebar } from "./sidebar";

/**
 * The frame both AI Agent pages share: the chat sidebar, a header whose search
 * opens the palette, and one card filling the rest of the window. `actions`
 * fill the right of the header; `chatId` marks the open chat.
 */
export function AiAgentLayout({ chatId, actions, children }: { chatId?: number; actions: ReactNode; children: ReactNode }) {
	const [searching, setSearching] = useState(false);

	return (
		<ChatActionsProvider currentId={chatId}>
			<div className="flex items-start">
				<AiAgentSidebar activeId={chatId} />

				<div className="flex min-h-screen min-w-0 flex-1 flex-col pb-4">
					<ContentHeader>
						{/* Only a trigger: focusing it, or pressing ⌘K, opens the palette. */}
						<SearchField
							className="w-full max-w-140"
							placeholder="Search Chats..."
							aria-label="Search chats"
							readOnly
							shortcut
							onFocus={(event) => {
								event.currentTarget.blur();
								setSearching(true);
							}}
						/>
						<div className="mr-3 ml-auto flex items-center gap-1.5">{actions}</div>
					</ContentHeader>

					<Card className="flex-1 p-0">{children}</Card>
				</div>
			</div>

			<SearchPalette open={searching} onOpenChange={setSearching} />
		</ChatActionsProvider>
	);
}

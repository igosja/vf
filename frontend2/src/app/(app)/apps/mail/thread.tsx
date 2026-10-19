import { CircleEllipsis, Download, Forward, Reply, ReplyAll } from "lucide-react";

import { IconButton } from "@/components/common/icon-button";
import { Card } from "@/components/ui/card";
import { MAIL_THREAD } from "@/data/mail";

/** The conversation opened from the list, with its reply actions underneath. */
export function MailThread() {
	return (
		<div>
			<h2 className="mb-3 px-2 text-base font-medium xl:hidden">{MAIL_THREAD.subject}</h2>

			{MAIL_THREAD.messages.map((message) => (
				<Card key={message.time} className="mb-3 p-5">
					<div className="mb-5 flex items-start gap-4">
						<img src={message.avatar} className="avatar-mask size-9" alt="" />
						<div className="flex-1">
							<div className="mb-0.5">
								<span className="font-medium text-emphasis-foreground">{message.name}</span>
								<span className="ml-1 hidden text-sm text-muted-foreground sm:inline-block">&lt;{message.email}&gt;</span>
							</div>
							<div className="text-sm text-muted-foreground">To: {message.to}</div>
						</div>
						<div className="-mt-1 -mr-1 ml-auto flex shrink-0 items-center">
							<div className="me-2 text-xs text-muted-foreground">{message.time}</div>
							<IconButton>
								<CircleEllipsis />
								<span className="sr-only">More</span>
							</IconButton>
						</div>
					</div>

					<div className="sm:pl-14">
						<div className="flex flex-col gap-4">
							{message.body.map((paragraph) => (
								<p key={paragraph}>{paragraph}</p>
							))}
						</div>

						{message.attachments.length > 0 && (
							<div className="mt-8 mb-2 flex flex-wrap items-start gap-3">
								{message.attachments.map((file) => (
									<a
										key={file.name}
										href="#"
										className="flex items-start gap-2 rounded-xl border px-3 py-2 leading-none text-emphasis-foreground transition-colors hover:bg-accent"
									>
										<Download className="mt-0.5" />
										<div>
											<div className="mb-0.5 text-sm font-medium">{file.name}</div>
											<div className="text-xs text-muted-foreground">{file.size}</div>
										</div>
									</a>
								))}
							</div>
						)}
					</div>
				</Card>
			))}

			<div className="my-5 flex justify-center gap-2">
				<button
					type="button"
					className="flex h-8 items-center gap-2 rounded-lg px-2.5 text-emphasis-foreground transition-colors duration-300 hover:bg-accent"
				>
					<Reply />
					Reply
				</button>
				<button
					type="button"
					className="flex h-8 items-center gap-2 rounded-lg px-2.5 text-emphasis-foreground transition-colors duration-300 hover:bg-accent"
				>
					<ReplyAll />
					Reply All
				</button>
				<button
					type="button"
					className="flex h-8 items-center gap-2 rounded-lg px-2.5 text-emphasis-foreground transition-colors duration-300 hover:bg-accent"
				>
					<Forward />
					Forward
				</button>
			</div>
		</div>
	);
}

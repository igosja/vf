export type DirectMessage = {
	sender: string;
	message: string;
	time: string;
	read: boolean;
	avatar?: string;
	/** Shown with `color` when there is no avatar. */
	initial?: string;
	color?: string;
};

export const DIRECT_MESSAGES: DirectMessage[] = [
	{ sender: "Emma Wilson", message: "Can you send me the files?", time: "3 secs ago", read: true, avatar: "/img/contacts/2.jpg" },
	{ sender: "Brandon Lewis", message: "Let's review the presentation.", time: "10 secs ago", read: false, initial: "B", color: "bg-pink-400" },
	{ sender: "Michael Taylor", message: "Can we reschedule?", time: "15 secs ago", read: true, initial: "M", color: "bg-amber-400" },
	{ sender: "James Martinez", message: "See you at the event!", time: "30 secs ago", read: false, avatar: "/img/contacts/8.jpg" },
	{ sender: "Alice Johnson", message: "Hey, how are you?", time: "2 mins ago", read: true, avatar: "/img/contacts/1.jpg" },
	{ sender: "Lily King", message: "I need those files ASAP.", time: "5 mins ago", read: false, avatar: "/img/contacts/10.jpg" },
	{ sender: "Sophia Lewis", message: "Need your feedback on this.", time: "10 mins ago", read: true, avatar: "/img/contacts/7.jpg" },
	{ sender: "Chloe Anderson", message: "Thanks for your help!", time: "25 mins ago", read: false, initial: "C", color: "bg-lime-500" },
	{ sender: "Karen Smith", message: "Good morning!", time: "20 mins ago", read: true, initial: "K", color: "bg-emerald-500" },
	{ sender: "Sarah Lee", message: "Let's catch up soon!", time: "30 mins ago", read: false, initial: "S", color: "bg-primary" },
	{ sender: "Laura Wilson", message: "Lunch on me today!", time: "45 mins ago", read: true, initial: "L", color: "bg-red-400" },
	{ sender: "Tom Harris", message: "Can we talk later?", time: "50 mins ago", read: true, initial: "T", color: "bg-indigo-400" },
	{ sender: "David Brown", message: "Are you available for a call?", time: "1 hour ago", read: false, avatar: "/img/contacts/4.jpg" },
	{ sender: "Grace Walker", message: "Meeting has been moved.", time: "1 hour ago", read: true, initial: "G", color: "bg-teal-500" },
	{ sender: "Daniel White", message: "Can we finalize the report?", time: "40 mins ago", read: false, avatar: "/img/contacts/9.jpg" },
	{ sender: "John Doe", message: "Don't forget our meeting tomorrow.", time: "5 hours ago", read: true, initial: "J", color: "bg-cyan-500" },
	{ sender: "Andrew Scott", message: "Reminder for our call later.", time: "2 hours ago", read: false, initial: "A", color: "bg-purple-400" },
	{ sender: "Bob Martin", message: "Check out this picture.", time: "3 hours ago", read: true, avatar: "/img/contacts/3.jpg" },
	{ sender: "Olivia Davis", message: "Happy Birthday!", time: "2 hours ago", read: false, avatar: "/img/contacts/5.jpg" },
	{ sender: "Ethan Clark", message: "Here is the document.", time: "3 secs ago", read: true, avatar: "/img/contacts/6.jpg" },
];

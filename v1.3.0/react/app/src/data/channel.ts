import { Braces, FileText, FileType, Headphones, Play, Presentation, Sheet, Type, type LucideIcon } from "lucide-react";

/** A person in the channel. Shown with `color` when there is no avatar. */
export type Person = {
	name: string;
	avatar?: string;
	initial?: string;
	color?: string;
};

export const CHANNELS = ["General", "Art and Design", "Technology", "Announcements", "Product Releases"];

export const DIRECT_CONTACTS: Person[] = [
	{ name: "Candace Munoz", avatar: "/img/contacts/1.jpg" },
	{ name: "Antonia Griffith", initial: "A", color: "bg-primary" },
	{ name: "Gloria Singleton", avatar: "/img/contacts/2.jpg" },
	{ name: "Whitney Stewart", avatar: "/img/contacts/3.jpg" },
	{ name: "Maria Zimmerman", avatar: "/img/contacts/4.jpg" },
	{ name: "Samantha French", initial: "S", color: "bg-cyan-500" },
	{ name: "Wendy Mclaughlin", initial: "B", color: "bg-purple-400" },
	{ name: "Kristin Turner", avatar: "/img/contacts/9.jpg" },
	{ name: "Dewey Marsh", initial: "D", color: "bg-red-400" },
	{ name: "Hector Lawson", avatar: "/img/contacts/6.jpg" },
	{ name: "Sherman Perkins", initial: "S", color: "bg-amber-400" },
	{ name: "Christopher Lawrence", avatar: "/img/contacts/7.jpg" },
	{ name: "Malcolm Cannon", avatar: "/img/contacts/8.jpg" },
	{ name: "Lance Bishop", avatar: "/img/contacts/11.jpg" },
	{ name: "Harold Wilkerson", avatar: "/img/contacts/12.jpg" },
	{ name: "Rudy Hamilton", avatar: "/img/contacts/15.jpg" },
	{ name: "Mabel Copeland", avatar: "/img/contacts/14.jpg" },
	{ name: "Sarah Hammond", initial: "S", color: "bg-emerald-500" },
	{ name: "Gladys Matthews", avatar: "/img/contacts/13.jpg" },
];

/** One author's run of consecutive messages. */
export type MessageGroup = {
	author: Person;
	time: string;
	messages: string[];
};

export const CONVERSATION: { day: string; groups: MessageGroup[] }[] = [
	{
		day: "November 18, 2024",
		groups: [
			{
				author: { name: "Constance Mendoza", avatar: "/img/contacts/1.jpg" },
				time: "8:32 PM",
				messages: [
					"Hard together found of emerged",
					"Delicacy of must but the is acknowledge in failures on ahead with phase project the several arrives government absolutely know out place and repeat his crap copy. Projects feedback dull was go I king's war, not lie spirits my they and gradually road.",
					"Nunc luctus ultrices lacus",
				],
			},
			{
				author: { name: "Deborah Harrison", avatar: "/img/contacts/2.jpg" },
				time: "8:50 PM",
				messages: [
					"Pharetra sit amet aliquam id diam maecenas ultricies. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet",
					"Ut lectus nunc, suscipit quis nulla ac, tempus convallis ipsum. Morbi lobortis elit sit amet rutrum finibus. Morbi id blandit turpis. Fusce sed ex vel odio tristique rhoncus tempus ac nisi. Fusce vitae orci ac felis lobortis tempor. Vivamus orci turpis, laoreet vel suscipit quis, pulvinar non nunc. Donec semper laoreet dictum.",
				],
			},
			{
				author: { name: "Marsha Maxwell", initial: "M", color: "bg-primary" },
				time: "9:00 PM",
				messages: [
					"Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Amet nulla facilisi morbi tempus. Posuere morbi leo urna molestie at elementum eu facilisis sed",
					"Nam ac molestie leo",
				],
			},
			{
				author: { name: "Constance Mendoza", avatar: "/img/contacts/1.jpg" },
				time: "9:18 PM",
				messages: [
					"Gravida quis blandit turpis cursus. Tincidunt dui ut ornare lectus sit. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Viverra orci sagittis eu volutpat odio facilisis mauris sit. Ut faucibus pulvinar elementum integer",
				],
			},
			{
				author: { name: "Marlene Elliott", avatar: "/img/contacts/3.jpg" },
				time: "9:34 PM",
				messages: ["Viverra maecenas accumsan lacus vel facilisis"],
			},
			{
				author: { name: "Rochelle Castillo", initial: "R", color: "bg-red-400" },
				time: "10:02 PM",
				messages: ["Vitae tempus quam pellentesque nec nam aliquam sem et tortor. Mauris in aliquam sem fringilla"],
			},
			{
				author: { name: "Marsha Maxwell", initial: "M", color: "bg-primary" },
				time: "11:43 PM",
				messages: ["Tortor vitae purus"],
			},
		],
	},
	{
		day: "November 19, 2024",
		groups: [
			{
				author: { name: "Salvador Burton", avatar: "/img/contacts/15.jpg" },
				time: "9:12 AM",
				messages: ["Gravida quis blandit turpis cursus"],
			},
			{
				author: { name: "Oliver Ramirez", initial: "O", color: "bg-amber-400" },
				time: "10:00 AM",
				messages: [
					"Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Tellus mauris a diam maecenas sed enim ut sem viverra. Consequat mauris nunc congue nisi vitae",
					"Nam ac molestie leo",
					"Yeah",
				],
			},
			{
				author: { name: "Salvador Burton", avatar: "/img/contacts/15.jpg" },
				time: "11:24 AM",
				messages: ["Ipsum faucibus vitae aliquet nec ullamcorper sit"],
			},
		],
	},
];

export type Member = {
	name: string;
	display: string;
	avatar: string;
	online: boolean;
};

export const CHANNEL_MEMBERS: Member[] = [
	{ name: "Candace Munoz", display: "candace", avatar: "/img/contacts/6.jpg", online: true },
	{ name: "Antonia Griffith", display: "antonia-ls", avatar: "/img/contacts/7.jpg", online: true },
	{ name: "Gloria Singleton", display: "singleton2021", avatar: "/img/contacts/8.jpg", online: true },
	{ name: "Whitney Stewart", display: "stewart", avatar: "/img/contacts/9.jpg", online: true },
	{ name: "Maria Zimmerman", display: "zimmerman", avatar: "/img/contacts/10.jpg", online: true },
	{ name: "Samantha French", display: "samanthafrench", avatar: "/img/contacts/11.jpg", online: false },
	{ name: "Wendy Mclaughlin", display: "wendy", avatar: "/img/contacts/12.jpg", online: false },
	{ name: "Kristin Turner", display: "wenurner", avatar: "/img/contacts/13.jpg", online: false },
	{ name: "Dewey Marsh", display: "marsh", avatar: "/img/contacts/14.jpg", online: false },
	{ name: "Hector Lawson", display: "lawson-h", avatar: "/img/contacts/15.jpg", online: false },
	{ name: "Sherman Perkins", display: "sherman", avatar: "/img/contacts/16.jpg", online: false },
];

/** A shared file shows its `image` thumbnail, else its type `icon`. */
export type ChannelFile = {
	name: string;
	owner: string;
	date: string;
	image?: string;
	icon?: LucideIcon;
};

export const CHANNEL_FILES: ChannelFile[] = [
	{ name: "package.json", owner: "Isabelle Reid", date: "01/06", icon: Braces },
	{ name: "cover_letter.doc", owner: "Derrick Porter", date: "05/06", icon: FileText },
	{ name: "recording_09-10.mp3", owner: "Catherine Chandler", date: "02/07", icon: Headphones },
	{ name: "wallpaper-widescreen.jpg", owner: "Elva Erickson", date: "28/10", image: "/img/gallery/thumbs/2.jpg" },
	{ name: "screenshot-98731.jpg", owner: "Kathryn Williamson", date: "26/08", image: "/img/gallery/thumbs/1.jpg" },
	{ name: "animation-trailer.mp4", owner: "Lottie Conner", date: "08/10", icon: Play },
	{ name: "instructions.pdf", owner: "Frederick Alvarez", date: "23/05", icon: FileType },
	{ name: "signup-list.xls", owner: "Jerry McKenzie", date: "02/05", icon: Sheet },
	{ name: "sample-preview.jpg", owner: "Betty Berry", date: "14/11", image: "/img/gallery/thumbs/13.jpg" },
	{ name: "detailed-notes.txt", owner: "Della Reyes", date: "31/07", icon: Type },
	{ name: "presentation.ppt", owner: "Callie Kelley", date: "09/10", icon: Presentation },
];

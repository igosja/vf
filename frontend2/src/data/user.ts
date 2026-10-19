import { BriefcaseBusiness, GraduationCap, House, MapPin, Rss, type LucideIcon } from "lucide-react";

/** The profile owner, shown on every user page. */
export const USER = {
	name: "Malinda Andrew Hollaway",
	shortName: "Malinda Hollaway",
	handle: "@malindahollway",
	avatar: "/img/contacts/2.jpg",
	bio: "Full stack developer, swimmer, blogging enthusiast, steak lover, Youtuber...",
	facts: [
		{ icon: Rss, label: "Followed by 43 People" },
		{ icon: BriefcaseBusiness, label: "Developer at ABX Inc." },
		{ icon: House, label: "Lives in St. Lucia" },
		{ icon: MapPin, label: "From New Jersey" },
		{ icon: GraduationCap, label: "Went to University of Newcastle" },
	] satisfies { icon: LucideIcon; label: string }[],
};

export type Milestone = {
	title: string;
	detail: string;
};

export const WORK_EXPERIENCES: Milestone[] = [
	{ title: "Senior Software Engineer", detail: "IBM, 2017-05 to 2019-05 (2 years)" },
	{ title: "User Interface Engineer", detail: "Microsoft, 2016-02 to 2017-12 (01 year 10 Months)" },
	{ title: "Team Leader", detail: "Cisco, 2012-01 to 2016-01 (4 years)" },
	{ title: "Junior UX Developer", detail: "Samsung, 2010-01 to 2011-12 (2 years)" },
];

export const EDUCATION: Milestone[] = [
	{ title: "MSc in Software Engineering (2014 - 2015)", detail: "Oxford University - Oxford, United Kingdom" },
	{ title: "Bsc in Computer Science (2009 - 2012)", detail: "University of Wolverhampton - Wolverhampton, United Kingdom" },
	{ title: "High School (2005 - 2009)", detail: "Newham Sixth Form College - Newham, London, United Kingdom" },
];

export type PostComment = {
	avatar: string;
	name: string;
	time: string;
	comment: string;
};

/** A timeline post. `image` and `video` are the optional media under the text. */
export type Post = {
	time: string;
	text: string[];
	image?: string;
	video?: string;
	comments: PostComment[];
};

export const POSTS: Post[] = [
	{
		time: "5 mins ago",
		text: [
			"The Eiffel Tower is a wrought-iron masterpiece located in Paris, France. It was designed by Gustave Eiffel and was completed in 1889 as the entrance arch for the 1889 World's Fair. The tower stands at a height of 324 meters (1,063 feet) and was the tallest man-made structure in the world until the completion of the Chrysler Building in New York City. The Eiffel Tower offers breathtaking panoramic views of the city and is one of the most iconic landmarks globally, attracting millions of visitors each year.",
		],
		comments: [
			{
				avatar: "/img/contacts/1.jpg",
				name: "Pauline Jennings",
				time: "10 mins ago",
				comment:
					"The Eiffel Tower truly is a marvel of engineering and a symbol of Parisian elegance. I had the incredible opportunity to visit last summer, and the panoramic view from the top was absolutely breathtaking. Its amazing to think about the history and craftsmanship that went into creating this iconic landmark.",
			},
			{
				avatar: "/img/contacts/3.jpg",
				name: "Sophie Logan",
				time: "14 mins ago",
				comment:
					"I have always dreamt of visiting the Eiffel Tower, and your description has reignited my wanderlust! The fact that it was built over a century ago and still stands tall as a testament to human ingenuity is awe-inspiring",
			},
		],
	},
	{
		time: "12 mins ago",
		text: [
			"Perched atop a rugged hill, the ancient and majestic castle, shrouded in ominous dark clouds, stood as a haunting and awe-inspiring silhouette against the ever-changing canvas of the dimly lit sky.",
		],
		image: "/img/gallery/9.jpg",
		comments: [
			{
				avatar: "/img/contacts/4.jpg",
				name: "Nellie McLaughlin",
				time: "2 hours ago",
				comment:
					"Your vivid description truly transports me to a world of mystery and grandeur. The contrast between the ancient castle, perched atop the rugged hill, and the foreboding dark clouds creates a captivating scene that sparks the imagination.",
			},
		],
	},
	{
		time: "32 mins ago",
		text: [
			"Prepare to be spellbound by 'Eclipse of Destiny,' a cinematic masterpiece that intertwines ancient legends with modern-day struggles. As dark clouds gather over the enchanting kingdom, an age-old prophecy sets the stage for an epic journey of courage, sacrifice, and self-discovery. With breathtaking visuals, mesmerizing storytelling, and a cast that brings characters to life, get ready to embark on an adventure that will leave you on the edge of your seat, craving for more.",
		],
		video: "https://www.youtube.com/embed/uYPbbksJxIg",
		comments: [
			{
				avatar: "/img/contacts/5.jpg",
				name: "Catherine Ramsey",
				time: "4 hours ago",
				comment:
					"This trailer has me completely hooked! The blend of ancient legends and modern struggles is intriguing, and the visuals are absolutely stunning.",
			},
			{
				avatar: "/img/contacts/6.jpg",
				name: "Sara Bishop",
				time: "5 hours ago",
				comment:
					"Wow, just wow. This looks like a true cinematic gem. The way they have combined history and present-day challenges is captivating, and those visuals are on another level. Counting down the days till this adventure hits the screen!",
			},
			{
				avatar: "/img/contacts/7.jpg",
				name: "Belle Henderson",
				time: "6 hours ago",
				comment: "I am already on the edge of my seat, eagerly awaiting this epic journey!",
			},
			{
				avatar: "/img/contacts/8.jpg",
				name: "Lydia McCarthy",
				time: "10 hours ago",
				comment: "The cinematography in this trailer is absolutely breathtaking! I can't wait to see how the story unfolds.",
			},
		],
	},
];

export type Connection = {
	name: string;
	handle: string;
	avatar: string;
	mutual: string;
};

export const CONNECTIONS: Connection[] = [
	{ name: "Essie Carlson", handle: "@essiecarlson", avatar: "/img/contacts/1.jpg", mutual: "33" },
	{ name: "Dominic Grant", handle: "@dominicgrant", avatar: "/img/contacts/2.jpg", mutual: "10" },
	{ name: "Stephen McBride", handle: "@stephenmcbride", avatar: "/img/contacts/3.jpg", mutual: "45" },
	{ name: "Josephine Murphy", handle: "@josephinemurphy", avatar: "/img/contacts/4.jpg", mutual: "22" },
	{ name: "Virginia Crawford", handle: "@virginiacrawford", avatar: "/img/contacts/5.jpg", mutual: "01" },
	{ name: "Chase Hines", handle: "@chasehines", avatar: "/img/contacts/6.jpg", mutual: "12" },
	{ name: "Lula Kim", handle: "@lulakim", avatar: "/img/contacts/7.jpg", mutual: "76" },
	{ name: "Curtis Ryan", handle: "@curtisryan", avatar: "/img/contacts/8.jpg", mutual: "89" },
	{ name: "Alma Sims", handle: "@almasims", avatar: "/img/contacts/9.jpg", mutual: "65" },
	{ name: "Jesus Scott", handle: "@jesusscott", avatar: "/img/contacts/10.jpg", mutual: "34" },
	{ name: "Cynthia Cain", handle: "@cynthiacain", avatar: "/img/contacts/11.jpg", mutual: "76" },
	{ name: "Melvin Townsend", handle: "@melvintownsend", avatar: "/img/contacts/12.jpg", mutual: "29" },
	{ name: "Lena Jensen", handle: "@lenajensen", avatar: "/img/contacts/13.jpg", mutual: "45" },
	{ name: "Lloyd Fisher", handle: "@lloydfisher", avatar: "/img/contacts/14.jpg", mutual: "12" },
	{ name: "Mark Spencer", handle: "@spencer", avatar: "/img/contacts/15.jpg", mutual: "07" },
	{ name: "Ben Afflect", handle: "@afflect", avatar: "/img/contacts/16.jpg", mutual: "23" },
];

/** The user's uploads: a thumbnail for the grid and the full photo for the viewer. */
export const USER_PHOTOS = Array.from({ length: 24 }, (_, i) => ({
	thumb: `/img/gallery/thumbs/${i + 1}.jpg`,
	full: `/img/gallery/${i + 1}.jpg`,
}));

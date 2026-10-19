export type TeamMember = {
	name: string;
	avatar: string;
};

export type Team = {
	title: string;
	description: string;
	cover: string;
	count: number;
	members: TeamMember[];
};

const member = (name: string, photo: number): TeamMember => ({ name, avatar: `/img/contacts/${photo}.jpg` });

export const TEAMS: Team[] = [
	{
		title: "IT and Engineering",
		description: "Building the future with technology and innovation",
		cover: "/img/team/1.jpg",
		count: 43,
		members: [
			member("Lizzie Wells", 6),
			member("Susie Kelley", 7),
			member("Dora Norris", 8),
			member("Ola Briggs", 9),
			member("Jesse Vega", 10),
			member("Gabriel Richards", 11),
		],
	},
	{
		title: "UI and Design",
		description: "Crafting user experiences through exceptional design",
		cover: "/img/team/3.jpg",
		count: 20,
		members: [
			member("Chase Chavez", 2),
			member("Beatrice Tyler", 10),
			member("Lura Willis", 11),
			member("Arthur Stevens", 3),
			member("Tillie Woods", 9),
			member("Howard Holland", 4),
		],
	},
	{
		title: "Sales and Marketing",
		description: "Where strategy meets execution in sales and marketing",
		cover: "/img/team/2.jpg",
		count: 32,
		members: [
			member("Lucile Lamb", 3),
			member("Josie Day", 5),
			member("Ivan Higgins", 1),
			member("Katharine Gill", 2),
			member("Amy Russell", 16),
			member("Blake Allison", 15),
		],
	},
	{
		title: "Search Engine Optimization",
		description: "Boosting visibility and rankings with SEO strategies",
		cover: "/img/team/3.jpg",
		count: 25,
		members: [
			member("Mina Daniels", 4),
			member("Francis Duncan", 10),
			member("Chad Brock", 9),
			member("Raymond Morales", 14),
			member("Nettie Floyd", 11),
			member("Clarence Bass", 7),
		],
	},
	{
		title: "Human Resource Management",
		description: "Maximizing employee potential with HR expertise",
		cover: "/img/team/4.jpg",
		count: 24,
		members: [
			member("Ruby Ramsey", 12),
			member("Nettie Becker", 13),
			member("Kathryn Spencer", 14),
			member("Ronald Delgado", 15),
			member("Stella Ramos", 16),
			member("John Jefferson", 12),
		],
	},
	{
		title: "Research and Development",
		description: "Driving innovation through dedicated R&D efforts",
		cover: "/img/team/5.jpg",
		count: 10,
		members: [member("Georgia Ruiz", 6), member("Peter Warner", 7), member("Virginia Hansen", 8), member("Ora Hughes", 9), member("Mathilda Ruiz", 10)],
	},
	{
		title: "AI and ML",
		description: "Leading the way in AI and ML advancements",
		cover: "/img/team/6.jpg",
		count: 8,
		members: [member("Georgia Ruiz", 9), member("Peter Warner", 10), member("Virginia Hansen", 11), member("Ora Hughes", 12), member("Mathilda Ruiz", 13)],
	},
	{
		title: "Finance and Accounting",
		description: "Nulla labore excepteur suntelit nostrud labore aliqua",
		cover: "/img/team/7.jpg",
		count: 4,
		members: [member("Georgia Ruiz", 6), member("Peter Warner", 7), member("Virginia Hansen", 8), member("Ora Hughes", 9)],
	},
	{
		title: "Customer Support",
		description: "Connecting with customers through empathetic service",
		cover: "/img/team/8.jpg",
		count: 4,
		members: [member("Georgia Ruiz", 15), member("Peter Warner", 14), member("Virginia Hansen", 13), member("Ora Hughes", 12)],
	},
];

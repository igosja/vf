export type Mail = {
	from: string;
	subject: string;
	/** `short` is the list column: the time today, else the date. */
	time: { full: string; short: string };
	/** Shown with `color` when there is no avatar. */
	avatar?: string;
	initial?: string;
	color?: string;
	unread: boolean;
	attachment: boolean;
};

export const MAILS: Mail[] = [
	{
		from: "Jordan Swanson",
		subject: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
		time: { full: "Sun 20/12/2019 10:10", short: "10:10" },
		avatar: "/img/contacts/1.jpg",
		unread: false,
		attachment: true,
	},
	{
		from: "Ivan Mack",
		subject: "Proin consectetur leo a sem lobortis pulvinar",
		time: { full: "Sun 20/12/2019 09:21", short: "09:21" },
		avatar: "/img/contacts/15.jpg",
		unread: true,
		attachment: true,
	},
	{
		from: "Marguerite Estrada",
		subject: "Integer pellentesque lorem et erat aliquet accumsan",
		time: { full: "Sun 20/12/2019 06:34", short: "06:34" },
		initial: "M",
		color: "bg-primary",
		unread: true,
		attachment: false,
	},
	{
		from: "Christine Torres",
		subject: "Suspendisse ut est at urna maximus eleifend",
		time: { full: "Sun 20/12/2019 02:55", short: "02:55" },
		avatar: "/img/contacts/3.jpg",
		unread: true,
		attachment: true,
	},
	{
		from: "Rafael Daniel",
		subject: "Quisque cursus ipsum ac commodo ultricies",
		time: { full: "Sun 20/12/2019 01:02", short: "01:02" },
		initial: "R",
		color: "bg-red-400",
		unread: true,
		attachment: true,
	},
	{
		from: "Nelson Long",
		subject: "Sed scelerisque sapien at vehicula dignissim",
		time: { full: "Fri 28/11/2019 22:43", short: "28/11" },
		avatar: "/img/contacts/4.jpg",
		unread: true,
		attachment: false,
	},
	{
		from: "Francisco Howell",
		subject: "Curabitur vestibulum ipsum non nulla lacinia, at mattis magna blandit",
		time: { full: "Thu 27/11/2019 01:00", short: "27/11" },
		avatar: "/img/contacts/5.jpg",
		unread: false,
		attachment: false,
	},
	{
		from: "Wanda Coleman",
		subject: "Donec ornare elit iaculis elementum rhoncus",
		time: { full: "Thu 27/11/2019 12:30", short: "27/11" },
		initial: "W",
		color: "bg-emerald-500",
		unread: true,
		attachment: true,
	},
	{
		from: "Terry Ramirez",
		subject: "Morbi id ligula rutrum",
		time: { full: "Tue 25/11/2019 02:33", short: "25/11" },
		initial: "T",
		color: "bg-amber-400",
		unread: false,
		attachment: true,
	},
	{
		from: "Patrick Simmons",
		subject: "Vestibulum quis arcu eget ipsum condimentum congue",
		time: { full: "Sat 22/11/2019 12:32", short: "22/11" },
		avatar: "/img/contacts/6.jpg",
		unread: false,
		attachment: true,
	},
	{
		from: "Sharon Sanders",
		subject: "Proin auctor velit et luctus varius",
		time: { full: "Thu 20/11/2019 24:12", short: "20/11" },
		initial: "S",
		color: "bg-cyan-500",
		unread: false,
		attachment: false,
	},
	{
		from: "Charles Carter",
		subject: "Elementum erat vel sem gravida tristique",
		time: { full: "Thu 20/11/2019 22:00", short: "20/11" },
		avatar: "/img/contacts/7.jpg",
		unread: false,
		attachment: true,
	},
	{
		from: "Kenneth Murphy",
		subject: "Aliquam nec nulla maximus",
		time: { full: "Wed 19/11/2019 08:32", short: "19/11" },
		initial: "K",
		color: "bg-purple-400",
		unread: true,
		attachment: true,
	},
	{
		from: "Janice Washington",
		subject: "Fusce laoreet dolor tempor metus",
		time: { full: "Sat 15/11/2019 04:56", short: "15/11" },
		avatar: "/img/contacts/8.jpg",
		unread: true,
		attachment: true,
	},
	{
		from: "Douglas Barnes",
		subject: "Morbi cursus tortor",
		time: { full: "Sat 15/11/2019 02:12", short: "15/11" },
		avatar: "/img/contacts/9.jpg",
		unread: true,
		attachment: false,
	},
	{
		from: "Christina Miller",
		subject: "Cras at arcu in libero aliquet fringilla",
		time: { full: "Wed 12/11/2019 10:10", short: "12/11" },
		avatar: "/img/contacts/10.jpg",
		unread: false,
		attachment: false,
	},
	{
		from: "Marilyn Richardson",
		subject: "Vivamus in felis ut ipsum suscipit porttitor tincidunt",
		time: { full: "Mon 10/11/2019 20:40", short: "10/11" },
		initial: "M",
		color: "bg-amber-400",
		unread: false,
		attachment: true,
	},
	{
		from: "Peter Johnson",
		subject: "Fusce semper nisi et lacus bibendum",
		time: { full: "Mon 10/11/2019 19:44", short: "10/11" },
		initial: "P",
		color: "bg-cyan-500",
		unread: true,
		attachment: false,
	},
	{
		from: "Helen Powell",
		subject: "Nam in erat non nibh semper euismod at a turpis",
		time: { full: "Sun 09/11/2019 05:03", short: "09/11" },
		avatar: "/img/contacts/11.jpg",
		unread: true,
		attachment: false,
	},
	{
		from: "Tammy Thompson",
		subject: "Aenean tristique metus ac commodo vestibulum",
		time: { full: "Sun 09/11/2019 02:59", short: "09/11" },
		initial: "T",
		color: "bg-purple-400",
		unread: false,
		attachment: true,
	},
];

export type ThreadMessage = {
	avatar: string;
	name: string;
	email: string;
	to: string;
	time: string;
	body: string[];
	attachments: { name: string; size: string }[];
};

/** The conversation opened from the list. */
export const MAIL_THREAD = {
	subject: "Re: Maecenas sed diam eget risus varius blandit",
	messages: [
		{
			avatar: "/img/contacts/14.jpg",
			name: "Martha Buchanan",
			email: "martha@linearadmin.la",
			to: "Malinda Hollaway",
			time: "10:10",
			body: [
				"Hi there!",
				"Ad quis veniam ullamco et id cillum esse ut. Labore non nisi fugiat occaecat qui ex est. Consequat magna minim cillum aute ut ipsum id occaecat nulla deserunt esse sunt.",
				"Nostrud officia magna sint dolor quis. Mollit tempor adipisicing dolor ad exercitation aliqua Lorem. Dolor culpa irure culpa exercitation duis labore incididunt anim. Laborum ad incididunt consequat sit nulla sit id nostrud adipisicing mollit magna do ullamco. Cillum aliquip culpa consectetur reprehenderit aliquip laborum enim ut sint magna eiusmod.",
			],
			attachments: [
				{ name: "lead-decemeber.csv", size: "1.2 mb" },
				{ name: "screenshot.png", size: "787 kb" },
			],
		},
		{
			avatar: "/img/contacts/2.jpg",
			name: "Malinda Hollaway",
			email: "malinda-h@maed.ba",
			to: "Malinda Hollaway",
			time: "10:30",
			body: [
				"Deserunt excepteur ad amet cillum mollit et ex sit voluptate. Consequat voluptate excepteur esse dolore sunt tempor cupidatat voluptate voluptate mollit. Mollit occaecat consectetur deserunt culpa minim mollit consectetur Lorem. Ex ad fugiat duis consectetur fugiat anim commodo qui. Veniam officia ex anim ut ex et cupidatat proident sit tempor. Lorem ipsum proident eu duis.",
			],
			attachments: [],
		},
		{
			avatar: "/img/contacts/14.jpg",
			name: "Martha Buchanan",
			email: "martha@linearadmin.la",
			to: "Malinda Hollaway",
			time: "10:45",
			body: [
				"Tempor occaecat in elit id ut qui esse enim eiusmod nostrud.",
				"Commodo consequat sint eiusmod deserunt pariatur nostrud consectetur. Consequat do amet tempor id ex magna. Aliqua culpa nisi Lorem incididunt nulla. Laborum excepteur ad labore labore proident qui do eiusmod enim est dolore aliquip Lorem. Et esse adipisicing id id dolor sint nisi deserunt Lorem ea et officia mollit commodo. Tempor est deserunt qui eiusmod qui. Eu ipsum anim ut do cillum ullamco dolor eiusmod velit.",
			],
			attachments: [{ name: "summary.txt", size: "983 kb" }],
		},
	] satisfies ThreadMessage[],
};

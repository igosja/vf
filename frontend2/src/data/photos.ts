export type PhotoGroup = {
	date: string;
	location: string;
	/** Paths to the photos taken that day. */
	photos: string[];
};

const gallery = (numbers: number[]) => numbers.map((number) => `/img/gallery/${number}.jpg`);

export const PHOTO_GROUPS: PhotoGroup[] = [
	{ date: "Wednesday, Dec 10", location: "New York", photos: gallery([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) },
	{ date: "Friday, Dec 5", location: "London", photos: gallery([11, 12, 13, 14, 15]) },
	{ date: "Monday, Nov 30", location: "Dubai", photos: gallery([16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7]) },
];

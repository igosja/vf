import { CircleDollarSign, CircleUserRound, Grip, LockKeyhole, Pointer, ShieldCheck, type LucideIcon } from "lucide-react";

export type FaqCategory = {
	title: string;
	icon: LucideIcon;
	questions: string[];
};

export const FAQ_CATEGORIES: FaqCategory[] = [
	{
		title: "Manage your account",
		icon: CircleUserRound,
		questions: [
			"How do I create an account?",
			"Can I change my account password?",
			"How do I update my profile information?",
			"Can I add or remove profile pictures?",
			"Is it possible to merge or link multiple accounts?",
			"What privacy settings are available for my account?",
			"How can I deactivate or delete my account?",
		],
	},
	{
		title: "Payment and billing",
		icon: CircleDollarSign,
		questions: [
			"How do I update my payment method?",
			"When will I be billed for my subscription?",
			"Can I change my subscription plan?",
			"What payment options are accepted?",
			"Is my payment information secure?",
			"How can I view my billing history?",
			"What should I do if my payment fails?",
		],
	},
	{
		title: "Legal and privacy",
		icon: ShieldCheck,
		questions: [
			"What is your privacy policy?",
			"How do you protect my personal information?",
			"Can I opt out of data collection and tracking?",
			"What are your terms of service and user agreements?",
			"How do I report a privacy concern or data breach?",
			"Is my data shared with third parties?",
			"What are my rights regarding my personal data?",
		],
	},
	{
		title: "Login and registration",
		icon: LockKeyhole,
		questions: [
			"How do I create a new account?",
			"What information is required for registration?",
			"I forgot my password. What should I do?",
			"Is there a minimum password strength requirement?",
			"How do I change my password?",
			"Can I update my registered email address?",
			"How can I delete my account if needed?",
		],
	},
	{
		title: "User interface and experience",
		icon: Pointer,
		questions: [
			"How can I provide feedback on the user interface?",
			"What are some tips for improving user experience?",
			"Can I customize the interface to my preferences?",
			"What accessibility features are available?",
			"How do I navigate the user interface efficiently?",
			"Are there keyboard shortcuts for common actions?",
			"How often are user interface updates released?",
		],
	},
	{
		title: "Everything else",
		icon: Grip,
		questions: [
			"How can I contact customer support?",
			"What are your business hours?",
			"Is there a mobile app available?",
			"How do I reset my security questions?",
			"Can I change my username or display name?",
			"What are the system requirements for your service?",
			"Is there a referral program or rewards program?",
		],
	},
];

/** The answer the details dialog shows for every question. */
export const FAQ_ANSWER = {
	intro: "To create an account on our platform and unlock a world of possibilities, follow these simple steps:",
	steps: [
		"Look for the 'Sign Up' or 'Register' button, typically located at the top right corner of the page. Click on it to initiate the registration process.",
		"A registration form will appear, asking for your basic information such as Name, Email Address, Password etc. Fill up the form with correct input details.",
		"Carefully read and accept our Terms of Service and Privacy Policy by checking the respective boxes.",
		"You may receive a verification email at the address you provided. Click on the verification link within the email to confirm your account. If you don't receive an email, check your spam folder.",
		"Once your account is verified, log in with your email and password. You may be prompted to complete your profile by adding a profile picture, personal information, or additional settings.",
	],
	outro: "Congratulations, you've successfully created an account! You can now explore and enjoy all the features and services available to our registered users.",
};

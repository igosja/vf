import { AtSign } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";

import { AuthCard, AuthField, authLink } from "../auth-card";

export default function ForgotPassword() {
	const [sent, setSent] = useState(false);

	return (
		<AuthCard
			title={sent ? "Check your inbox" : "Recover Password"}
			description={
				sent
					? "If that address is registered, an email with a link to reset the password is on its way."
					: "Enter your registered email address below, and we'll send you an email allowing you to reset the password."
			}
		>
			{!sent && (
				<form
					className="mb-5"
					onSubmit={(event) => {
						event.preventDefault();
						setSent(true);
					}}
				>
					<AuthField icon={AtSign} className="mb-8" type="email" placeholder="Email Address" autoComplete="email" />
					<Button type="submit" className="w-full uppercase">
						Reset Password
					</Button>
				</form>
			)}

			<div className="text-center">
				<Link to="/pages/login" className={authLink}>
					Back to login page
				</Link>
			</div>
		</AuthCard>
	);
}

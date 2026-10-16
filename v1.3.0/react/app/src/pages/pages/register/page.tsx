import { CircleUserRound, LockKeyhole, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

import { AuthCard, AuthField, authLink } from "../auth-card";

export default function Register() {
	const navigate = useNavigate();

	return (
		<AuthCard title="Create an account" description="Please fill all the input and submit the form">
			<form
				className="mb-5"
				onSubmit={(event) => {
					event.preventDefault();
					navigate("/");
				}}
			>
				<AuthField icon={CircleUserRound} className="mb-3" placeholder="Username" autoComplete="username" />
				<AuthField icon={Mail} className="mb-3" type="email" placeholder="Email Address" autoComplete="email" />
				<AuthField icon={LockKeyhole} className="mb-3" type="password" placeholder="Password" autoComplete="new-password" />
				<AuthField icon={LockKeyhole} className="mb-8" type="password" placeholder="Confirm Password" autoComplete="new-password" />
				<Button type="submit" className="w-full uppercase">
					Create Account
				</Button>
			</form>

			<div className="text-center">
				<Link to="/pages/login" className={authLink}>
					Already have an account?
				</Link>
			</div>
		</AuthCard>
	);
}

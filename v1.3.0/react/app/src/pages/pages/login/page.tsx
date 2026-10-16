import { CircleUserRound, LockKeyhole } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";

import { AuthCard, AuthField, authLink } from "../auth-card";

export default function Login() {
	const navigate = useNavigate();

	return (
		<AuthCard title="Welcome to Materia!" description="Please sign in to continue to the system">
			<form
				className="mb-5"
				onSubmit={(event) => {
					event.preventDefault();
					navigate("/");
				}}
			>
				<AuthField icon={CircleUserRound} className="mb-3" placeholder="Username" autoComplete="username" />
				<AuthField icon={LockKeyhole} className="mb-8" type="password" placeholder="Password" autoComplete="current-password" />
				<Button type="submit" className="w-full uppercase">
					Sign In
				</Button>
			</form>

			<div className="flex flex-col items-center gap-1">
				<Link to="/pages/register" className={authLink}>
					Register for a new account
				</Link>
				<Link to="/pages/forgot-password" className={authLink}>
					Forgot password?
				</Link>
			</div>
		</AuthCard>
	);
}

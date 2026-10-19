"use client";

import { Logo } from "@/components/common/logo";
import { ContentHeader } from "@/components/layout/content-header";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "@/lib/router";

function GoogleIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
			<path
				fill="currentColor"
				d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
			/>
		</svg>
	);
}

function AppleIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
			<path
				fill="currentColor"
				d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
			/>
		</svg>
	);
}

export default function FormTemplates() {
	return (
		<>
			<ContentHeader title="Form Templates" breadcrumb={["Miscellaneous", "Forms"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<div className="grid gap-4 lg:grid-cols-2">
					<Card>
						<CardHeader>
							<CardTitle>Login form</CardTitle>
						</CardHeader>
						<p className="mt-1.5 mb-6">Enter your email below to login to your account.</p>

						<form onSubmit={(event) => event.preventDefault()}>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="login-email">Email</FieldLabel>
									<Input id="login-email" type="email" placeholder="admin@materia.app" required />
								</Field>
								<Field>
									<div className="flex items-center">
										<FieldLabel htmlFor="login-password">Password</FieldLabel>
										<a href="#" className="ml-auto text-xs">
											Forgot your password?
										</a>
									</div>
									<Input id="login-password" type="password" required />
								</Field>
								<Field orientation="horizontal">
									<Checkbox id="login-remember" />
									<FieldLabel htmlFor="login-remember">Stay logged in</FieldLabel>
								</Field>
								<Field>
									<Button type="submit">Login</Button>
									<Button type="button" variant="outline">
										<GoogleIcon />
										Login with Google
									</Button>
									<FieldDescription className="text-center">
										Don't have an account? <a href="#">Sign up</a>
									</FieldDescription>
								</Field>
							</FieldGroup>
						</form>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Registration form</CardTitle>
						</CardHeader>
						<p className="mt-1.5 mb-6">Enter your information below to create your account.</p>

						<form onSubmit={(event) => event.preventDefault()}>
							<FieldGroup>
								<Field>
									<FieldLabel htmlFor="register-name">Full Name</FieldLabel>
									<Input id="register-name" type="text" placeholder="Lina Black" required />
								</Field>
								<Field>
									<FieldLabel htmlFor="register-email">Email</FieldLabel>
									<Input id="register-email" type="email" placeholder="admin@materia.app" required />
									<FieldDescription>We'll use this to contact you. We will not share your email with anyone else.</FieldDescription>
								</Field>
								<div className="grid gap-4 sm:grid-cols-2">
									<Field>
										<FieldLabel htmlFor="register-password">Password</FieldLabel>
										<Input id="register-password" type="password" required />
									</Field>
									<Field>
										<FieldLabel htmlFor="register-confirm">Confirm Password</FieldLabel>
										<Input id="register-confirm" type="password" required />
									</Field>
								</div>
								<FieldDescription className="-mt-3">Must be at least 8 characters long.</FieldDescription>
								<Field>
									<Button type="submit">Create Account</Button>
									<FieldDescription className="text-center">
										Already have an account? <a href="#">Sign in</a>
									</FieldDescription>
								</Field>
							</FieldGroup>
						</form>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Social sign in</CardTitle>
						</CardHeader>
						<p className="mt-1.5 mb-6">A one-field sign in with email, and a choice of providers underneath.</p>

						<form onSubmit={(event) => event.preventDefault()}>
							<FieldGroup>
								<div className="flex flex-col items-center gap-2 text-center">
									<Logo className="size-10" />
									<h3 className="text-lg font-medium">Welcome to Materia</h3>
									<FieldDescription>
										Don't have an account? <a href="#">Sign up</a>
									</FieldDescription>
								</div>
								<Field>
									<FieldLabel htmlFor="social-email">Email</FieldLabel>
									<Input id="social-email" type="email" placeholder="admin@materia.app" required />
								</Field>
								<Field>
									<Button type="submit">Login</Button>
								</Field>
								<FieldSeparator>Or</FieldSeparator>
								<Field className="grid gap-4 sm:grid-cols-2">
									<Button type="button" variant="outline">
										<AppleIcon />
										Continue with Apple
									</Button>
									<Button type="button" variant="outline">
										<GoogleIcon />
										Continue with Google
									</Button>
								</Field>
								<FieldDescription className="text-center">
									By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
								</FieldDescription>
							</FieldGroup>
						</form>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Contact form</CardTitle>
						</CardHeader>
						<p className="mt-1.5 mb-6">Send us a message and we'll get back to you within a working day.</p>

						<form onSubmit={(event) => event.preventDefault()}>
							<FieldGroup>
								<div className="grid gap-4 sm:grid-cols-2">
									<Field>
										<FieldLabel htmlFor="contact-name">Name</FieldLabel>
										<Input id="contact-name" placeholder="Lina Black" required />
									</Field>
									<Field>
										<FieldLabel htmlFor="contact-email">Email</FieldLabel>
										<Input id="contact-email" type="email" placeholder="admin@materia.app" required />
									</Field>
								</div>
								<Field>
									<FieldLabel htmlFor="contact-message">Message</FieldLabel>
									<Textarea id="contact-message" placeholder="How can we help?" className="min-h-24" required />
								</Field>
								<Field orientation="horizontal">
									<Checkbox id="contact-privacy" />
									<FieldLabel htmlFor="contact-privacy">
										<span>
											I agree to the <a href="#">privacy policy</a>
										</span>
									</FieldLabel>
								</Field>
								<Field orientation="horizontal">
									<Button type="submit">Send Message</Button>
								</Field>
							</FieldGroup>
						</form>
					</Card>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Newsletter form</CardTitle>
					</CardHeader>
					<p className="mt-1.5 mb-6">One line to sign up, with the consent note underneath.</p>

					<form className="md:w-1/2" onSubmit={(event) => event.preventDefault()}>
						<Field>
							<FieldLabel htmlFor="newsletter-email" className="sr-only">
								Email
							</FieldLabel>
							<div className="flex items-center gap-2">
								<Input id="newsletter-email" type="email" placeholder="Email address" required />
								<Button type="submit">Subscribe</Button>
							</div>
							<FieldDescription>We send one email a month. Unsubscribe at any time.</FieldDescription>
						</Field>
					</form>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Advanced KYC Form</CardTitle>
					</CardHeader>
					<p className="mt-4 mb-4">
						Materia includes an advanced KYC (Know Your Client) form template, comprising a comprehensive array of fields such as account details,
						personal information, contact details, and more.
					</p>
					<p>
						You can access the demo by visiting <Link to="/user/preferences">User Preferences</Link>.
					</p>
				</Card>
			</div>
		</>
	);
}

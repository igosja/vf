"use client";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/** Each sample sits on a tinted box, so the real card shows on it. */
const BOX = "p-0 bg-transparent";

const SAMPLE = "w-full max-w-sm";

export default function CardPage() {
	return (
		<>
			<ContentHeader title="Card" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Default" description="A header with an action, a form, and a footer of buttons." className={BOX}>
					<Card className={SAMPLE}>
						<CardHeader className="mb-6">
							<div className="flex-1">
								<CardTitle className="mt-0 mb-1">Login to your account</CardTitle>
								<CardDescription>Enter your email below to login to your account</CardDescription>
							</div>
							<CardAction className="mt-0">
								<Button variant="link" size="sm">
									Sign Up
								</Button>
							</CardAction>
						</CardHeader>
						<CardContent>
							<form>
								<FieldGroup>
									<Field>
										<FieldLabel htmlFor="card-email">Email</FieldLabel>
										<Input id="card-email" type="email" placeholder="m@example.com" required />
									</Field>
									<Field>
										<div className="flex items-center">
											<FieldLabel htmlFor="card-password">Password</FieldLabel>
											<a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
												Forgot your password?
											</a>
										</div>
										<Input id="card-password" type="password" required />
									</Field>
								</FieldGroup>
							</form>
						</CardContent>
						<CardFooter className="mt-6 flex-col gap-2">
							<Button type="submit" className="w-full">
								Login
							</Button>
							<Button variant="outline" className="w-full">
								Login with Google
							</Button>
						</CardFooter>
					</Card>
				</ExampleCard>

				<ExampleCard title="Edge to edge" description="Pull a block out to the card's edges with negative margins." className={BOX}>
					<Card className={SAMPLE}>
						<CardHeader className="mb-4 flex-col gap-1">
							<CardTitle className="mt-0">Terms of Service</CardTitle>
							<CardDescription>Review the terms before accepting the agreement.</CardDescription>
						</CardHeader>
						<CardContent className="-mx-6 max-h-48 space-y-4 overflow-y-auto px-6 py-4 text-sm leading-relaxed">
							<p>These terms govern your use of the workspace, including access to shared documents, project files, and collaboration tools.</p>
							<p>
								You are responsible for the content you upload and for ensuring that your team has the appropriate permissions to view or edit
								it.
							</p>
							<p>
								We may update features or limits as the service evolves. When those changes materially affect your workflow, we will notify your
								workspace administrators.
							</p>
							<p>
								By continuing, you agree to keep your account credentials secure and to follow your organization&apos;s acceptable use policies.
							</p>
						</CardContent>
						<CardFooter className="mt-6 justify-end gap-2">
							<Button variant="outline">Decline</Button>
							<Button>Accept</Button>
						</CardFooter>
					</Card>
				</ExampleCard>

				<ExampleCard title="Image" description="An image across the top, then the header and footer." className={BOX}>
					<Card className={cn(SAMPLE, "overflow-hidden p-0")}>
						<img src="/img/gallery/5.jpg" alt="Event cover" className="aspect-video w-full object-cover" />
						<div className="p-6">
							<CardHeader className="mb-6">
								<div className="flex-1">
									<CardTitle className="mt-0 mb-1">Design systems meetup</CardTitle>
									<CardDescription>A practical talk on component APIs, accessibility, and shipping faster.</CardDescription>
								</div>
								<CardAction className="mt-0">
									<Badge variant="secondary">Featured</Badge>
								</CardAction>
							</CardHeader>
							<CardFooter>
								<Button className="w-full">View Event</Button>
							</CardFooter>
						</div>
					</Card>
				</ExampleCard>
			</div>
		</>
	);
}

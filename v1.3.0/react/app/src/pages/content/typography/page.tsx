import { ExampleCard, ExampleSection, Preview } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";

const QUOTE = "A well-known quote, contained in a blockquote element.";

function Quote({ className }: { className?: string }) {
	return (
		<figure className={className}>
			<blockquote className="mb-2 text-base">
				<p>{QUOTE}</p>
			</blockquote>
			<figcaption className="text-muted-foreground">
				&ndash; Someone famous in <cite>Source Title</cite>
			</figcaption>
		</figure>
	);
}

export default function Typography() {
	return (
		<>
			<ContentHeader title="Typography" breadcrumb={["Miscellaneous", "Content"]} toc />

			<div className="mx-auto flex max-w-300 flex-col gap-4 pb-4">
				<ExampleCard
					title="Headings"
					description={
						<>
							All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, take the emphasis colour. Size them from the type scale.
						</>
					}
				>
					<Preview className="flex flex-col gap-2 font-medium">
						<h1 className="text-3xl">h1. Materia heading</h1>
						<h2 className="text-2xl">h2. Materia heading</h2>
						<h3 className="text-xl">h3. Materia heading</h3>
						<h4 className="text-lg">h4. Materia heading</h4>
						<h5 className="text-base">h5. Materia heading</h5>
						<h6 className="text-sm">h6. Materia heading</h6>
					</Preview>

					<ExampleSection
						title="Display headings"
						description="When a heading needs to stand out, such as a hero or a landing page title, set it larger and lighter."
					>
						<Preview className="flex flex-col gap-2 font-light text-emphasis-foreground">
							<div className="text-7xl">Display 1</div>
							<div className="text-6xl">Display 2</div>
							<div className="text-5xl">Display 3</div>
							<div className="text-4xl">Display 4</div>
						</Preview>
					</ExampleSection>
				</ExampleCard>

				<ExampleCard title="Paragraphs" description="Body copy, and the larger, smaller and quieter variants around it.">
					<Preview className="flex flex-col gap-4">
						<p className="text-lg font-light">This is a lead paragraph. It stands out from regular paragraphs.</p>
						<p>This is body copy. The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.</p>
						<p className="text-base font-medium text-emphasis-foreground">Are you absolutely sure?</p>
						<p className="text-xs">This line of text is meant to be treated as fine print.</p>
						<p className="text-muted-foreground">Enter your email address to receive updates.</p>
					</Preview>
				</ExampleCard>

				<ExampleCard title="Inline text elements" description="Styling for common inline HTML elements.">
					<Preview className="flex flex-col gap-4">
						<p>
							You can use the mark tag to <mark className="bg-amber-400/25 text-foreground">highlight</mark> text.
						</p>
						<p>
							<del>This line of text is meant to be treated as deleted text.</del>
						</p>
						<p>
							<s>This line of text is meant to be treated as no longer accurate.</s>
						</p>
						<p>
							<ins>This line of text is meant to be treated as an addition to the document.</ins>
						</p>
						<p>
							<u>This line of text will render as underlined.</u>
						</p>
						<p>
							<small className="text-xs">This line of text is meant to be treated as fine print.</small>
						</p>
						<p>
							<strong className="font-semibold">This line rendered as bold text.</strong>
						</p>
						<p>
							<em>This line rendered as italicized text.</em>
						</p>
						<p>
							Press <kbd className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-xs text-emphasis-foreground">Ctrl</kbd> to run{" "}
							<code>npm run dev</code>.
						</p>
					</Preview>
				</ExampleCard>

				<ExampleCard
					title="Abbreviations"
					description={
						<>
							An <code>&lt;abbr&gt;</code> shows its full form on hover. Set an initialism a size smaller and in capitals.
						</>
					}
				>
					<Preview className="flex flex-col gap-4">
						<p>
							<abbr title="attribute">attr</abbr>
						</p>
						<p>
							<abbr title="HyperText Markup Language" className="text-xs uppercase">
								HTML
							</abbr>
						</p>
					</Preview>
				</ExampleCard>

				<ExampleCard
					title="Blockquotes"
					description={
						<>
							For quoting blocks of content from another source. Wrap <code>&lt;blockquote&gt;</code> around the quote.
						</>
					}
				>
					<Preview>
						<blockquote className="text-base">
							<p>{QUOTE}</p>
						</blockquote>
					</Preview>

					<ExampleSection
						title="Naming a source"
						description={
							<>
								To credit the source, wrap the <code>&lt;blockquote&gt;</code> in a <code>&lt;figure&gt;</code> and put the source in a{" "}
								<code>&lt;figcaption&gt;</code>.
							</>
						}
					>
						<Preview>
							<Quote />
						</Preview>
					</ExampleSection>

					<ExampleSection title="Alignment" description="Align the quote and its source with the text alignment utilities.">
						<Preview className="mb-3">
							<Quote className="text-center" />
						</Preview>
						<Preview>
							<Quote className="text-right" />
						</Preview>
					</ExampleSection>

					<ExampleSection title="Accent border" description="A border down the left side sets a pull quote apart from the copy around it.">
						<Preview>
							<blockquote className="border-l-2 border-primary pl-6 text-base italic">
								"After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
							</blockquote>
						</Preview>
					</ExampleSection>
				</ExampleCard>

				<ExampleCard title="Lists" description="Bulleted, numbered, unstyled and inline lists.">
					<div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
						<ExampleSection title="Bulleted" className="mt-0">
							<Preview>
								<ul className="flex list-disc flex-col gap-1 pl-5">
									<li>1st level of puns: 5 gold coins</li>
									<li>2nd level of jokes: 10 gold coins</li>
									<li>
										3rd level of one-liners: 20 gold coins
										<ul className="mt-1 flex list-[circle] flex-col gap-1 pl-5">
											<li>Nested items keep a bullet</li>
											<li>and their own indent</li>
										</ul>
									</li>
								</ul>
							</Preview>
						</ExampleSection>

						<ExampleSection title="Numbered" className="mt-0">
							<Preview>
								<ol className="flex list-decimal flex-col gap-1 pl-5">
									<li>Create an account</li>
									<li>Verify your email address</li>
									<li>Complete your profile</li>
									<li>Invite your team</li>
								</ol>
							</Preview>
						</ExampleSection>

						<ExampleSection
							title="Unstyled"
							className="mt-0"
							description="Lists drop their bullets and indent by default. Nested lists still need their own styles."
						>
							<Preview>
								<ul className="flex flex-col gap-1">
									<li>This is a list.</li>
									<li>It appears completely unstyled.</li>
									<li>Structurally, it's still a list.</li>
									<li>
										Nested lists:
										<ul className="mt-1 flex list-disc flex-col gap-1 pl-5">
											<li>are styled on their own</li>
											<li>show a bullet</li>
											<li>and have a left indent</li>
										</ul>
									</li>
								</ul>
							</Preview>
						</ExampleSection>

						<ExampleSection title="Inline" className="mt-0" description="Lay the items out in a row with flex and a gap.">
							<Preview>
								<ul className="flex flex-wrap gap-x-4 gap-y-1">
									<li>This is a list item.</li>
									<li>And another one.</li>
									<li>But they're displayed inline.</li>
								</ul>
							</Preview>
						</ExampleSection>
					</div>
				</ExampleCard>

				<ExampleCard
					title="Description lists"
					description="Line terms up with their descriptions on a grid. Truncate a long term to keep the column tidy."
				>
					<Preview>
						<dl className="grid gap-x-6 gap-y-3 sm:grid-cols-4">
							<dt className="font-medium text-emphasis-foreground">Description lists</dt>
							<dd className="sm:col-span-3">A description list is perfect for defining terms.</dd>

							<dt className="font-medium text-emphasis-foreground">Term</dt>
							<dd className="flex flex-col gap-2 sm:col-span-3">
								<p>Definition for the term.</p>
								<p>And some more placeholder definition text.</p>
							</dd>

							<dt className="font-medium text-emphasis-foreground">Another term</dt>
							<dd className="sm:col-span-3">This definition is short, so no extra paragraphs or anything.</dd>

							<dt className="truncate font-medium text-emphasis-foreground">Truncated term is truncated</dt>
							<dd className="sm:col-span-3">This can be useful when space is tight. Adds an ellipsis at the end.</dd>

							<dt className="font-medium text-emphasis-foreground">Nesting</dt>
							<dd className="sm:col-span-3">
								<dl className="grid gap-x-6 sm:grid-cols-3">
									<dt className="font-medium text-emphasis-foreground">Nested definition list</dt>
									<dd className="sm:col-span-2">
										I heard you like definition lists. Let me put a definition list inside your definition list.
									</dd>
								</dl>
							</dd>
						</dl>
					</Preview>
				</ExampleCard>
			</div>
		</>
	);
}

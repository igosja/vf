import { REGEXP_ONLY_DIGITS } from "input-otp";

import { ExampleCard } from "@/components/common/example";
import { ContentHeader } from "@/components/layout/content-header";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";

export default function InputOtpPage() {
	return (
		<>
			<ContentHeader title="Input OTP" breadcrumb={["Miscellaneous", "Components"]} toc />

			<div className="mx-auto flex max-w-4xl flex-col gap-4 pb-4">
				<ExampleCard title="Digits only" description="A box per character, in two groups. Paste fills every box at once.">
					<Field>
						<FieldLabel htmlFor="otp-code">Verification code</FieldLabel>
						<InputOTP id="otp-code" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />
							</InputOTPGroup>
							<InputOTPSeparator />
							<InputOTPGroup>
								<InputOTPSlot index={3} />
								<InputOTPSlot index={4} />
								<InputOTPSlot index={5} />
							</InputOTPGroup>
						</InputOTP>
						<FieldDescription>Enter the 6-digit code we sent to your phone.</FieldDescription>
					</Field>
				</ExampleCard>

				<ExampleCard title="Letters and numbers" description="Without a pattern, any character goes.">
					<Field>
						<FieldLabel htmlFor="otp-invite">Invite code</FieldLabel>
						<InputOTP id="otp-invite" maxLength={4}>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />
								<InputOTPSlot index={3} />
							</InputOTPGroup>
						</InputOTP>
						<FieldDescription>Letters and numbers, four characters.</FieldDescription>
					</Field>
				</ExampleCard>
			</div>
		</>
	);
}

import { Logo } from '@/components/logo'
import { Spinner } from '@/components/spinner'
import { Button } from '@/shadcn/components/ui/button'

import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'

export const Header = () => {
	return (
		<header className="h-20 w-full border-b-1 shadow-sm border-slate-200 px-2">
			<div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full ">
				<Logo />
				<ClerkLoading>
					<Spinner />
				</ClerkLoading>
				<ClerkLoaded>
					<SignedIn>
						<UserButton showName />
					</SignedIn>
					<SignedOut>
						<SignInButton mode="modal">
							<Button variant="ghost">
								sign in
							</Button>
						</SignInButton>
					</SignedOut>
				</ClerkLoaded>
			</div>
		</header>
	)
}

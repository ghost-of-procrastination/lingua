import MascotIcon from '@/assets/mascot.svg'
import { Button } from '@/components/ui/button'

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
				<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
					<MascotIcon height="40px" />
					<p className="text-3xl font-bold text-green-500 tracking-wide">
						Lingo
					</p>
				</div>
				<ClerkLoading>
					<Loader className="h-5 w-5 text-muted-foreground animate-spin" />
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

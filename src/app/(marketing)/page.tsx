import HeroIcon from '@/assets/icons/hero.svg'
import { Spinner } from '@/components/spinner'
import { Button } from '@/shadcn/components/ui/button'
import {
	ClerkLoaded,
	ClerkLoading,
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
} from '@clerk/nextjs'
import Link from 'next/link'

const Home = () => {
	return (
		<div className="max-w-5xl mx-auto flex-1 w-full gap-12 flex flex-col lg:flex-row items-center justify-center">
			<div className="relative w-3xs h-3xs lg:w-sm lg:h-sm">
				<HeroIcon />
			</div>
			<div className="flex flex-col flex-1 items-center gap-y-10">
				<h1 className="text-xl lg:text-3xl font-bold text-neutral-600  text-center">
					Learn, practice and eat fecal flows with
					our educational innovations.
				</h1>
				<div className="flex flex-col gap-2 w-full sm:w-sm">
					<ClerkLoading>
						<Spinner />
					</ClerkLoading>
					<ClerkLoaded>
						<SignedOut>
							<SignUpButton mode="modal">
								<Button
									size="lg"
									variant="secondary"
								>
									get started
								</Button>
							</SignUpButton>
							<SignInButton mode="modal">
								<Button
									size="lg"
									variant="primary-outline"
								>
									already have an account
								</Button>
							</SignInButton>
						</SignedOut>
						<SignedIn>
							<Link href="/learn">
								<Button
									size="lg"
									variant="secondary"
									className="w-full"
								>
									continue learning
								</Button>
							</Link>
						</SignedIn>
					</ClerkLoaded>
				</div>
			</div>
		</div>
	)
}

export default Home

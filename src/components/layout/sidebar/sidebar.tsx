import { cn } from '@/shadcn/lib/utils'
import { Logo } from '../../logo'
import {
	SidebarItem,
	SidebarItemProps,
} from './sidebar-item'
import LearnIcon from '@/assets/learn.svg'
import LeaderboardIcon from '@/assets/leaderboard.svg'
import QuestsIcon from '@/assets/quests.svg'
import ShopIcon from '@/assets/shop.svg'
import {
	ClerkLoaded,
	ClerkLoading,
	UserButton,
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import { Spinner } from '@/components/spinner'

interface Props {
	className?: string
}

const sidebarItems: SidebarItemProps[] = [
	{
		label: 'learn',
		href: '/learn',
		icon: <LearnIcon className="size-6" />,
	},
	{
		label: 'leaderboard',
		href: '/leaderboard',
		icon: <LeaderboardIcon className="size-6" />,
	},
	{
		label: 'quests',
		href: '/quests',
		icon: <QuestsIcon className="size-6" />,
	},
	{
		label: 'shop',
		href: '/shop',
		icon: <ShopIcon className="size-6" />,
	},
]

export const Sidebar = ({ className }: Props) => {
	const renderedItems = sidebarItems.map((i) => (
		<SidebarItem key={i.label} {...i} />
	))

	return (
		<div
			className={cn(
				'flex h-full lg:w-clg lg:fixed left-0 top-0 px-4 lg:border-r-1 flex-col',
				className,
			)}
		>
			<Logo />
			<div className="flex flex-col gap-y-2 flex-1 mt-4">
				{renderedItems}
			</div>
			<div className="p-4">
				<ClerkLoading>
					<Spinner />
				</ClerkLoading>
				<ClerkLoaded>
					<UserButton />
				</ClerkLoaded>
			</div>
		</div>
	)
}

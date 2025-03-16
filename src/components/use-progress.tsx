import { Button } from '@/shadcn/components/ui/button'
import Link from 'next/link'
import PointsIcon from '@/assets/icons/points.svg'
import HeartIcon from '@/assets/icons/heart.svg'
import { InfinityIcon } from 'lucide-react'

interface Props {
	activeCourse: any
	hearts: number
	points: number
	hasActiveSubscription: boolean
}

export const UserProgress = ({
	activeCourse,
	hearts,
	points,
	hasActiveSubscription,
}: Props) => {
	return (
		<div className="flex items-center justify-between gap-x-2 w-full">
			<Link href="/courses">
				<Button variant="ghost">
					<activeCourse.Icon className="size-auto w-8 h-6 rounded-sm drop-shadow-md" />
				</Button>
			</Link>
			<Link href="/shop">
				<Button
					variant="ghost"
					className="text-orange-500"
				>
					<PointsIcon className="size-7 mr-2" />
					{points}
				</Button>
			</Link>
			<Link href="/shop">
				<Button
					variant="ghost"
					className="text-rose-500"
				>
					<HeartIcon className="size-6 mr-2" />
					{hasActiveSubscription ? (
						<InfinityIcon className="size-4 stroke-[3]" />
					) : (
						hearts
					)}
				</Button>
			</Link>
		</div>
	)
}

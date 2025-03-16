import { FeedWrapper } from '@/components/layout/feed-wrapper'
import { StickyWrapper } from '@/components/layout/sticky-wrapper'
import { Header } from './header'
import { UserProgress } from '@/components/use-progress'
import FrIcon from '@/assets/icons/countries/fr-flag.svg'

const LearnPage = () => {
	return (
		<div className="flex gap-[48px] px-6">
			<FeedWrapper>
				<Header title="French" />
			</FeedWrapper>
			<StickyWrapper>
				<UserProgress
					activeCourse={{
						title: 'French',
						Icon: FrIcon,
					}}
					hearts={5}
					points={100}
					hasActiveSubscription={false}
				/>
			</StickyWrapper>
		</div>
	)
}

export default LearnPage

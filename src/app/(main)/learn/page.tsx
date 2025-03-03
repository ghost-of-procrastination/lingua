import { FeedWrapper } from '@/components/layout/feed-wrapper'
import { StickyWrapper } from '@/components/layout/sticky-wrapper'

const LearnPage = () => {
	return (
		<div className="flex gap-[48px] px-6">
			<FeedWrapper>feed</FeedWrapper>
			<StickyWrapper>sticky</StickyWrapper>
		</div>
	)
}

export default LearnPage

interface Props {
	children: React.ReactNode
}

export const FeedWrapper = ({ children }: Props) => {
	return (
		<div className="flex-1 relative top-0 pb-10">
			<div className="min-h-[calc(100dvh-48px)] sticky top-6 flex flex-col gap-y-4">
				{children}
			</div>
		</div>
	)
}

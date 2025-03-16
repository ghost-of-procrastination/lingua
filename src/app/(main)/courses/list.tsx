'use client'

import { courses } from '@/db/schema'
import { Card } from './card'

interface Props {
	courses: (typeof courses.$inferSelect)[]
	activeCourseId: number
}

export const List = ({
	courses,
	activeCourseId,
}: Props) => {
	const renderedCourses = courses.map((c) => {
		return (
			<Card
				key={c.id}
				id={c.id}
				title={c.title}
				imageSrc={c.imageSrc}
				onClick={() => {}}
				disabled={false}
				active={c.id === activeCourseId}
			/>
		)
	})

	return (
		<div className="pt-6 gap-4 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
			{renderedCourses}
		</div>
	)
}

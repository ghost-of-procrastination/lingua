import { getCourses } from '@/db/queries'
import { List } from './list'

const CoursesPage = async () => {
	const data = await getCourses()

	console.log('qwe root')

	return (
		<div className="full-h max-w-[912px] px-3 mx-auto">
			<h1 className="text-2xl font-bold text-neutral-700">
				courses
			</h1>
			<List courses={data} activeCourseId={1} />
		</div>
	)
}

export default CoursesPage

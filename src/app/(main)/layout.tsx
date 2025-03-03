import { MobileHeader } from '@/components/layout/mobile-header'
import { Sidebar } from '@/components/layout/sidebar/sidebar'

interface Props {
	children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<MobileHeader />
			<Sidebar className="hidden lg:flex" />
			<main className="lg:pl-clg h-full flex pt-csm lg:pt-0">
				<div className="w-page mx-auto pt-8 h-full">
					{children}
				</div>
			</main>
		</>
	)
}

export default MainLayout

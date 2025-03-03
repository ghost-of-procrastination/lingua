import { MobileSidebar } from './sidebar/mobile-sidebar'

export const MobileHeader = () => {
	return (
		<nav className="lg:hidden px-6 h-csm flex items-center bg-amber-500 border-b-1 fixed top-0 w-full z-50">
			<MobileSidebar />
		</nav>
	)
}

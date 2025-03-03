import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/shadcn/components/ui/sheet'
import { Sidebar } from './sidebar'
import { Menu } from 'lucide-react'

export const MobileSidebar = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-white cursor-pointer" />
			</SheetTrigger>
			<SheetContent side="left" className="border-0">
				<Sidebar />
			</SheetContent>
		</Sheet>
	)
}

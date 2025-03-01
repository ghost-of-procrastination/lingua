import { Button } from '@/components/ui/button'

const DevButtonsPage = () => {
	return (
		<div className="flex flex-col max-w-[184px] justify-start gap-1 mt-6 ml-4">
			<Button>default</Button>
			<Button variant="primary">Primary</Button>
			<Button variant="primary-outline">Primary outline</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="secondary-outline">Secondary outline</Button>
			<Button variant="danger">danger</Button>
			<Button variant="danger-outline">danger outline</Button>
			<Button variant="super">super</Button>
			<Button variant="super-outline">super outline</Button>
			<Button variant="ghost">ghost</Button>
			<Button variant="sidebar">sidebar</Button>
			<Button variant="sidebar-outline">sidebar outline</Button>
		</div>
	)
}

export default DevButtonsPage

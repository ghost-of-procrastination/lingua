import { Button } from '@/shadcn/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Props {
	title: string
}

export const Header = ({ title }: Props) => {
	return (
		<div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] flex items-center justify-between  border-b-1 mb-5 text-neutral-400 lg:z-50">
			<Link href="/courses">
				{' '}
				<Button variant="ghost" size="sm">
					<ArrowLeft className="size-5 stroke-2 text-neutral-400" />
				</Button>
			</Link>
			<p className="font-bold text-lg">{title}</p>
			<div />
		</div>
	)
}

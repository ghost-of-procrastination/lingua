import { cn } from '@/shadcn/lib/utils'
import { Check } from 'lucide-react'
import Image from 'next/image'

interface Props {
	id: number
	title: string
	imageSrc: string
	onClick: () => void
	disabled: boolean
	active: boolean
}

export const Card = ({
	id,
	title,
	imageSrc,
	onClick,
	disabled,
	active,
}: Props) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				'h-full border-2 rounded-xl border-b-6 hover:bg-black/3 cursor-pointer active:border-b-4 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px] select-none',
				disabled &&
					'pointer-events-none opacity-50',
			)}
		>
			<div className="min-w-[24px] w-full flex items-center justify-end">
				{active && (
					<div className="rounded-sm bg-green-500 flex items-center justify-center p-1">
						<Check className="text-white stroke-[4] h-4 w-4" />
					</div>
				)}
			</div>
			<Image
				src={imageSrc}
				alt={title}
				height={70}
				width={93.33}
				className="rounded-lg drop-shadow-md border object-cover"
			/>
			<p className="text-neutral-700 text-center font-bold mt-3">
				{title}
			</p>
		</div>
	)
}

import MascotIcon from '@/assets/mascot.svg'
import Link from 'next/link'

export const Logo = () => {
	return (
		<Link href="/learn">
			<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3 max-h-max">
				<MascotIcon height="40px" />
				<p className="text-3xl font-bold text-green-500 tracking-wide">
					Lingo
				</p>
			</div>
		</Link>
	)
}

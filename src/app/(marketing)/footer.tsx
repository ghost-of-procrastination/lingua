import DeIcon from '@/assets/de-flag.svg'
import FrIcon from '@/assets/fr-flag.svg'
import JpIcon from '@/assets/jp-flag.svg'
import KrIcon from '@/assets/kr-flag.svg'
import UsIcon from '@/assets/us-flag.svg'
import { Button } from '@/shadcn/components/ui/button'
import { SvgIcon } from '@/types'

interface Props {
	Icon: SvgIcon
	name: string
}

const FlagButton = ({ Icon, name }: Props) => {
	return (
		<Button
			size="lg"
			variant="ghost"
			className="w-full"
		>
			<Icon className="w-8 h-6 rounded-sm mr-4 size-auto drop-shadow-md" />
			<p>{name}</p>
		</Button>
	)
}

export const Footer = () => {
	return (
		<footer className="hidden lg:block h-20 w-full border-t-1 shadow-top-md border-slate-200 p-2">
			<div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
				<FlagButton Icon={UsIcon} name="English" />
				<FlagButton Icon={DeIcon} name="German" />
				<FlagButton Icon={FrIcon} name="French" />
				<FlagButton Icon={JpIcon} name="Japanese" />
				<FlagButton Icon={KrIcon} name="Korean" />
			</div>
		</footer>
	)
}

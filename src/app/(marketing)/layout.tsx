import { Footer } from './footer'
import { Header } from './header'

type Props = {
	children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 flex-col items-center justify-center py-8 px-5">{children}</main>
			<Footer />
		</div>
	)
}

export default MarketingLayout

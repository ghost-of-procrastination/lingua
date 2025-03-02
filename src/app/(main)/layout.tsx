interface Props {
	children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
	return (
		<>
			<main className="pl-[256px] h-full">
				{children}
			</main>
		</>
	)
}

export default MainLayout

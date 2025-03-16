'use client'

import { Button } from '@/shadcn/components/ui/button'
import { cn } from '@/shadcn/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface SidebarItemProps {
	label: string
	icon: React.ReactNode
	href: string
}

export const SidebarItem = ({
	label,
	icon,
	href,
}: SidebarItemProps) => {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Button
			variant={
				isActive ? 'sidebar-outline' : 'sidebar'
			}
			className={cn(
				'justify-start h-csm',
				isActive && 'pointer-events-none',
			)}
			asChild
		>
			<Link href={href}>
				<div className="mr-2">{icon}</div>
				{label}
			</Link>
		</Button>
	)
}

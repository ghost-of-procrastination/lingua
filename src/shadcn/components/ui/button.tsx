import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import {
	cva,
	type VariantProps,
} from 'class-variance-authority'
import { cn } from '@/shadcn/lib/utils'

const buttonVariants = cva(
	"uppercase cursor-pointer tracking-wide inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					'bg-white text-slate-500 border-slate-200 border-3 border-t-2 border-b-6 active:border-b-3 hover:bg-slate-100',
				primary:
					'bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-6 active:border-b-3',
				'primary-outline':
					'bg-white text-sky-500 hover:bg-slate-100',
				secondary:
					'bg-green-500 text-primary-foreground hover:bg-green-500/85 border-green-600 border-b-6 active:border-b-3',
				'secondary-outline':
					'bg-white text-green-500 hover:bg-slate-100',
				danger: 'bg-rose-500 text-primary-foreground hover:bg-rose-500/85 border-rose-600 border-b-6 active:border-b-3',
				'danger-outline':
					'bg-white text-rose-500 hover:bg-slate-100',
				super: 'bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-600 border-b-6 active:border-b-3',
				'super-outline':
					'bg-white text-indigo-500 hover:bg-slate-100',
				ghost: 'bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100',
				sidebar:
					'bg-transparent text-slate-500 border-2 border-transparent transition-none hover:bg-slate-100',
				'sidebar-outline':
					'bg-sky-500/15 text-sky-500 boder-sky-300 border-sky-300 border-2 hover:bg-sky-500/20 transition-none',
			},
			size: {
				default: 'h-11 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-9 gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-12 px-6 has-[>svg]:px-4',
				icon: 'size-9',
				rounded: 'rounded-full',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean
	}) {
	const Comp = asChild ? Slot : 'button'

	return (
		<Comp
			data-slot="button"
			className={cn(
				buttonVariants({
					variant,
					size,
					className,
				}),
			)}
			{...props}
		/>
	)
}

export { Button, buttonVariants }

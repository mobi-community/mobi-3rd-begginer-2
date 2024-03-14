import { tailwindCSSMerge } from '@/utils'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'

type A3ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof ButtonVariants> & {
		children: string
	}

export const A3Button = ({
	variant,
	shape,
	size,
	weight,
	children,
}: A3ButtonProps) => {
	return (
		<button
			className={tailwindCSSMerge(
				ButtonVariants({ variant, shape, size, weight }),
			)}
		>
			{children}
		</button>
	)
}

const ButtonVariants = cva(``, {
	variants: {
		variant: {
			primary:
				'border-4 border-primary-0 text-primary-1000 active:bg-primary-400 active:text-grayScale-0',
			secondary:
				'border-4 border-secondary-0 text-secondary-1000 active:bg-secondary-400 active:text-grayScale-0',
			cancel: 'border-2 border-primary-0 text-black-1000',
		},
		shape: {
			square: 'rounded-none',
			primary: 'rounded',
			full: 'rounded-full',
		},
		size: {
			small: 'text-sm py-1 px-2',
			medium: 'text-md py-2 px-6',
			large: 'text-lg py-3 px-6',
		},
		weight: {
			normal: 'font-small',
			medium: 'font-medium',
			bold: 'font-bold',
		},
	},
	defaultVariants: {
		variant: 'primary',
		shape: 'primary',
		size: 'medium',
		weight: 'medium',
	},
})

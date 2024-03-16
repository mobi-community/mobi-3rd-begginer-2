import { cva } from 'class-variance-authority'
import type { ButtonProps } from './button.type'

export const ButtonVariants = cva(
	'py-1 px-2 border-solid text-Grey-Grey-10 active:text-Grey-Grey-600T60 p-2 flex items-center justify-center text-center',
	{
		variants: {
			theme: {
				primary:
					'bg-Primary-Black border-Primary-Red text-Primary-White active:bg-Primary-Red active:border-Primary-Black',
				secondary:
					'bg-Grey-Grey-800 border-Primary-White text-Primary-White active:bg-Primary-Black active:text-Grey-Grey-200 active:border-Grey-Grey-300T40',
			},
			size: {
				small: 'w-fit h-fit min-w-16 min-h-8 text-3xl border-2',
				large: 'w-fit h-fit min-w-28 min-h-14 text-4xl border-2',
				full: 'w-full h-fit min-w-28 min-h-14 text-4xl  border-4',
			},
			radius: {
				rectangle: 'rounded-none',
				semi: 'rounded-23xl',
			},
		},
		defaultVariants: {
			theme: 'primary',
			size: 'small',
			radius: 'rectangle',
		},
	},
)

export const Button = ({ theme, size, radius, children, ...rest }: ButtonProps) => {
	return (
		<button
			className={ButtonVariants({ theme, size, radius })}
			{...rest}
		>
			{children}
		</button>
	)
}

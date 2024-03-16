import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { cva } from 'class-variance-authority'
import type { InputProps } from './input.type'

export const InputVariants = cva('border-solid p-2 gap-2 flex justify-between items-center', {
	variants: {
		theme: {
			primary:
				'text-Primary-White border-Primary-White focus-within:border-Primary-Red bg-Primary-Black',
			secondary:
				'text-Primary-White focus-within:text-Primary-Black border-Grey-Grey-500 focus-within:border-Primary-White bg-Grey-Grey-250 focus-within:bg-Grey-Grey-10',
		},
		size: {
			small: 'w-40 h-10 text-2xl border-2',
			large: 'w-80 h-14 text-6xl border-4',
			full: 'w-full h-24 text-6xl  border-4',
		},
		radius: {
			rectangle: 'rounded-none',
			semi: 'rounded-23xl',
		},
	},
	defaultVariants: {
		theme: 'primary',
		size: 'full',
		radius: 'semi',
	},
})

export const Input = ({ theme, size, radius, iconData, ...rest }: InputProps) => {
	return (
		<div className={InputVariants({ theme, size, radius })}>
			<input
				className='w-full bg-transparent px-1'
				{...rest}
			/>
			{iconData && (
				<FontAwesomeIcon
					icon={iconData}
					className='text-inherit bg-inherit h-full'
				/>
			)}
		</div>
	)
}

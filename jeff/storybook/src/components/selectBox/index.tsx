import { cva } from 'class-variance-authority'
import type { SelectBoxProps } from './selectBox.type'

export const SelectBoxVariants = cva(
	'py-1 px-2 border-double text-Grey-Grey-10 active:text-Grey-Grey-600T60 p-2 flex items-center justify-center',
	{
		variants: {
			theme: {
				primary: 'bg-Primary-Black border-Primary-Red text-Primary-White',
				secondary: 'bg-Grey-Grey-300T40 border-Primary-White text-Primary-Black',
			},
			size: {
				small: 'w-fit h-fit min-w-16 min-h-8 text-xl border-2',
				large: 'w-fit h-fit min-w-28 min-h-14 text-4xl border-4',
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

export const SelectBox = ({ theme, size, radius, options, ...rest }: SelectBoxProps) => {
	return (
		<select
			className={SelectBoxVariants({ theme, size, radius })}
			{...rest}
		>
			{options?.map((option, idx) => {
				return (
					<option
						key={idx}
						value={option.value}
						className='bg-Primary-White text-Primary-Red'
					>
						{option.label}
					</option>
				)
			})}
		</select>
	)
}

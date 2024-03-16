import type { SelectBoxVariants } from '@/components'
import type { VariantProps } from 'class-variance-authority'

export type OptionType = {
	label: string
	value: string
}
export type SelectBoxProps = VariantProps<typeof SelectBoxVariants> & {
	options?: Array<OptionType>
}

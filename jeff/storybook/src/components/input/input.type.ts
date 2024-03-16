import { InputVariants } from '@/components'
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { VariantProps } from 'class-variance-authority'
import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
	VariantProps<typeof InputVariants> & {
		iconData?: IconProp
	}

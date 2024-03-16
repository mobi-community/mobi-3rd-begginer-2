import { ButtonVariants } from '@/components'
import type { VariantProps } from 'class-variance-authority'
import type { ButtonHTMLAttributes } from 'react'

export type ButtonProps = VariantProps<typeof ButtonVariants> &
	ButtonHTMLAttributes<HTMLButtonElement> & {
		children: string
	}

import type { HTMLAttributes } from 'react'
import type { IconType } from 'react-icons'
import { SizeCSS, ThemeCSS } from './a1Input.style'

export type A1InputProps = HTMLAttributes<HTMLInputElement> & {
	icon?: IconType
	theme?: keyof typeof ThemeCSS
	size?: keyof typeof SizeCSS
	placeholder?: string
}
export type $InputContainer = {
	$theme: keyof typeof ThemeCSS
	$size: keyof typeof SizeCSS
}

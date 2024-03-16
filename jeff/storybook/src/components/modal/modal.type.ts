import type { IconProp } from '@fortawesome/fontawesome-svg-core'

export type ModalProps = {
	theme?: 'red' | 'blue' | 'green'
	layout?: 'portrait' | 'landscape'
	iconData?: IconProp
	titleText?: string
	contentText?: string
	buttonText?: string
	onClick?: VoidFunction
}

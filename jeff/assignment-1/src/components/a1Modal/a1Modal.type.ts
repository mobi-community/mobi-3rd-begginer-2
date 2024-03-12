import { SizeCSS } from './a1Modal.style'

export type SystemType = 'confirm' | 'alert' | 'warning'

export type A1ModalProps = {
	size?: keyof typeof SizeCSS
	system?: SystemType
	contentText?: string
	onClick?: VoidFunction
}
export type $ModalContainerProps = {
	$size: keyof typeof SizeCSS
}
export type $SystemColorType = {
	$system: SystemType
}

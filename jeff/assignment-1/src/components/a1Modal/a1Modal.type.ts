import { COLOR } from '../../libs/styledComponents/tokens'
import { SizeCSS } from './a1Modal.style'

export type A1ModalProps = {
	size?: keyof typeof SizeCSS
	system?: keyof typeof COLOR.system
	contentText?: string
	onClick?: VoidFunction
}
export type $ModalContainerProps = {
	$size: keyof typeof SizeCSS
}
export type $SystemColorType = {
	$system: keyof typeof COLOR.system
}

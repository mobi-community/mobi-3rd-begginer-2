import * as S from './a1Modal.style'
import type { A1ModalProps } from './a1Modal.type'

export const A1Modal = ({
	size = 'middle',
	system = 'confirm',
	contentText,
	onClick = () => {},
}: A1ModalProps) => {
	const SYSTEM_TEXT = {
		confirm: 'Notice',
		alert: 'Alert',
		warning: 'Warning',
	} as const
	return (
		<S.ModalContainer $size={size}>
			<S.ContentContainer $system={system}>
				<S.SystemText>{SYSTEM_TEXT[system]}</S.SystemText>
				<S.Divider />
				{contentText}
			</S.ContentContainer>
			<S.ButtonWrapper>
				<S.Button
					$system={system}
					{...{ onClick }}
				>
					확인
				</S.Button>
			</S.ButtonWrapper>
		</S.ModalContainer>
	)
}

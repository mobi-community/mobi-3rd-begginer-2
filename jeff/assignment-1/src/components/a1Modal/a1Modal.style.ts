import styled, { css } from 'styled-components'
import { BORDER_RADIUS, COLOR } from '../../libs/styledComponents/tokens'
import type { $ModalContainerProps, $SystemColorType } from './a1Modal.type'

export const SizeCSS = {
	small: css`
		width: 45vw;
		height: 25vh;
	`,
	middle: css`
		width: 50vw;
		height: 30vh;
	`,
	big: css`
		width: 55vw;
		height: 40vh;
	`,
}
export const ModalContainer = styled.div<$ModalContainerProps>`
	display: grid;
	grid-template-rows: 4fr 2fr;
	border-radius: ${BORDER_RADIUS.small};
	color: ${COLOR.grayScale.light};
	border: 1px solid ${COLOR.grayScale.gray};
	overflow: hidden;
	${({ $size }) => SizeCSS[$size]}
`

export const SystemText = styled.h1`
	color: ${COLOR.grayScale.light};
	font-weight: 300;
`

export const ContentContainer = styled.div<$SystemColorType>`
	width: 100%;
	background-color: ${({ $system }) => COLOR.system[$system]};
	display: flex;
	flex-direction: column;
	padding: 1rem;
`
export const Divider = styled.div`
	width: 100%;
	height: 0.1rem;
	border-radius: ${BORDER_RADIUS.round};
	background-color: ${COLOR.grayScale.light};
`

export const ButtonContainer = styled.div`
	width: 100%;
	background-color: ${COLOR.grayScale.light};
	padding: 1rem;
	display: flex;
	align-self: center;
	justify-content: center;
`

export const Button = styled.div<$SystemColorType>`
	height: fit-content;
	width: 8rem;
	background-color: ${({ $system }) => COLOR.system[$system]};
	border-radius: ${BORDER_RADIUS.tiny};
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0.3rem;
`

import styled, { css } from 'styled-components'
import { BORDER_RADIUS, COLOR } from '../../libs/styledComponents/tokens'
import type { $ModalContainerProps, $SystemColorType } from './a1Modal.type'

export const SizeCSS = {
	small: css`
		width: 45rem;
		height: 25rem;
	`,
	middle: css`
		width: 50rem;
		height: 30rem;
	`,
	big: css`
		width: 55rem;
		height: 40rem;
	`,
}
export const ModalContainer = styled.div<$ModalContainerProps>`
	${({ $size }) => SizeCSS[$size]}
	display: grid;
	justify-content: stretch;
	grid-template-rows: 4fr 1fr;
	border-radius: ${BORDER_RADIUS.small};
	color: ${COLOR.grayScale.light};
	border: 1px solid ${COLOR.grayScale.gray};
`
export const SystemText = styled.h1`
	color: ${COLOR.grayScale.light};
	font-weight: 300;
`
export const ContentContainer = styled.div<$SystemColorType>`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 80%;
	background-color: ${({ $system }) => COLOR.system[$system]};
	padding: 1rem;
`
export const Divider = styled.div`
	width: 100%;
	height: 0.1rem;
	border-radius: ${BORDER_RADIUS.round};
	background-color: ${COLOR.grayScale.light};
`
export const ButtonWrapper = styled.div`
	width: 100%;
	height: 20%;
	background-color: ${COLOR.grayScale.light};
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: end;
`

export const Button = styled.div<$SystemColorType>`
	height: 'fit-content';
	width: 8rem;
	padding: 2rem;
	background-color: ${({ $system }) => COLOR.system[$system]};
	border-radius: ${BORDER_RADIUS.tiny};
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 0.3rem;
	border: 1px solid ${COLOR.grayScale.gray};
`

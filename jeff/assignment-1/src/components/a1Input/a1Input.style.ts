import styled, { css } from 'styled-components'
import {
	BORDER_RADIUS,
	BORDER_THICKNESS,
	COLOR,
	FONT_SIZE,
} from '../../libs/styledComponents/tokens'
import type { $InputContainer } from './a1Input.type'

export const ThemeCSS = {
	main: css`
		background-color: ${COLOR.brand.main.base};
		&:focus-within {
			color: ${COLOR.brand.main.base};
			background-color: ${COLOR.grayScale.light};
			border-color: ${COLOR.brand.main.light};
		}
	`,
	sub: css`
		background-color: ${COLOR.brand.sub.base};
		&:focus-within {
			color: ${COLOR.brand.sub.base};
			background-color: ${COLOR.grayScale.light};
			border-color: ${COLOR.brand.sub.light};
		}
	`,
}

export const SizeCSS = {
	default: css`
		width: 20rem;
	`,
	full: css`
		width: 100%;
	`,
}

export const InputContainer = styled.div<$InputContainer>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 20rem;

	height: 3rem;
	color: ${COLOR.grayScale.light};
	border: ${BORDER_THICKNESS.thin} solid;
	border-radius: ${BORDER_RADIUS.round};
	grid-template-columns: 1fr auto;
	grid-column-gap: 1rem;

	padding: 2rem;

	${({ $theme = 'main' }) => ThemeCSS[$theme as keyof typeof ThemeCSS]}
	${({ $size = 'default' }) => SizeCSS[$size as keyof typeof SizeCSS]}
`

export const InputBase = styled.input`
	width: 100%;
	font-size: ${FONT_SIZE.small};
	background-color: transparent;
	border: none;
	color: inherit;
	&::placeholder {
		color: ${COLOR.grayScale.light};
		font-size: ${FONT_SIZE.tiny};
	}
`

import { Global, css } from '@emotion/react'
import { theme } from './theme'

export const GlobalStyles = () => {
	return (
		<div>
			<Global
				styles={css`
					* {
						margin: 0;
						padding: 0;
						box-sizing: border-box;
						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						font-weight: 200;

						-ms-overflow-style: none;
						scrollbar-width: none;
						&::-webkit-scrollbar {
							display: none;
						}
					}

					html {
						font-size: 62.5%;

						@media screen and (max-width: 820px) {
							font-size: 50%;
						}
					}

					ul,
					li {
						list-style: none;
					}

					h1 {
						font-size: ${theme.FONT_SIZE.lg};
						font-weight: ${theme.FONT_WEIGHT.bold};
					}

					h2 {
						font-size: ${theme.FONT_SIZE.bg};
						font-weight: ${theme.FONT_WEIGHT.bold};
					}

					h3 {
						font-size: ${theme.FONT_SIZE.md};
						font-weight: ${theme.FONT_WEIGHT.bold};
					}

					h4 {
						font-size: ${theme.FONT_SIZE.sm};
						font-weight: ${theme.FONT_WEIGHT.bold};
					}

					button {
						border: none;
						outline: none;
					}

					input {
						outline: none;
					}

					textarea {
						font-size: ${theme.FONT_SIZE.sm};
					}

					p,
					div,
					span {
						font-size: ${theme.FONT_SIZE.sm};
					}
				`}
			/>
		</div>
	)
}

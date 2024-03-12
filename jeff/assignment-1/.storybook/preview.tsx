import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { GlobalStyles } from '../src/libs/styledComponents/globalStyles'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export const decorators = [
	withThemeFromJSXProvider({
		GlobalStyles,
	}),
]

export default preview

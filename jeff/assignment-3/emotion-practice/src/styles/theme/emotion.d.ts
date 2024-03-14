import '@emotion/react'
import { theme } from './'

declare module '@emotion/react' {
	export type Theme = IntrinsicAttributes & keyof typeof theme
}

import { Input } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Input> = {
	component: Input,
	tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const ThemePrimary: Story = {
	args: {
		theme: 'primary',
	},
}
export const ThemeSecondary: Story = {
	args: {
		theme: 'secondary',
	},
}
export const ScaleLarge: Story = {
	args: {
		scale: 'large',
	},
}

export const ScaleFull: Story = {
	args: {
		scale: 'full',
	},
}
export const RadiusRectangle: Story = {
	args: {
		radius: 'rectangle',
	},
}

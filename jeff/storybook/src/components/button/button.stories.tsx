import { Button } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
	component: Button,

	args: {
		children: 'Button',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

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
export const SizeLarge: Story = {
	args: {
		size: 'large',
	},
}
export const SizeFull: Story = {
	args: {
		size: 'full',
	},
}
export const RadiusSemi: Story = {
	args: {
		radius: 'semi',
	},
}

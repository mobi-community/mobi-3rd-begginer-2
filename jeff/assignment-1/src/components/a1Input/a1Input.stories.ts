import type { Meta, StoryObj } from '@storybook/react'
import { FaSearch } from 'react-icons/fa'
import { A1Input } from './'

const meta = {
	title: 'A1Input',
	component: A1Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof A1Input>
export default meta

type Story = StoryObj<typeof meta>

export const NonIconThemeMain: Story = {
	args: {
		theme: 'main',
	},
}
export const IconThemeMain: Story = {
	args: {
		icon: FaSearch,
		theme: 'main',
	},
}
export const NonIconThemeSub: Story = {
	args: {
		theme: 'sub',
	},
}
export const IconThemeSub: Story = {
	args: {
		icon: FaSearch,
		theme: 'sub',
	},
}
export const NonIconSizeFull: Story = {
	args: {
		size: 'full',
	},
}
export const IconSizeFull: Story = {
	args: {
		icon: FaSearch,
		size: 'full',
	},
}

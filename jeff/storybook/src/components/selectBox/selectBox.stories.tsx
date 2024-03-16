import { SelectBox } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SelectBox> = {
	component: SelectBox,
	parameters: {
		layout: 'centered',
	},
	render: () => {
		const options = [
			{ value: 'option1', label: '옵션1' },
			{ value: 'option2', label: '옵션2' },
		]
		return <SelectBox options={options} />
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SelectBox>

export default meta
type Story = StoryObj<typeof SelectBox>

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
export const RadiusSemi: Story = {
	args: {
		radius: 'semi',
	},
}

import { Meta, StoryObj } from '@storybook/react'
import { A1Modal } from '.'

const meta = {
	title: 'A1Modal',
	component: A1Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof A1Modal>
export default meta

type Story = StoryObj<typeof meta>

export const SizeSmall: Story = {
	args: {
		size: 'small',
		contentText: '모달 본문',
	},
}
export const SizeMiddle: Story = {
	args: {
		size: 'middle',
		contentText: '모달 본문',
	},
}
export const SizeBig: Story = {
	args: {
		size: 'big',
		contentText: '모달 본문',
	},
}
export const SystemConfirm: Story = {
	args: {
		system: 'confirm',
	},
}
export const SystemAlert: Story = {
	args: {
		system: 'alert',
		contentText: '모달 본문',
	},
}
export const SystemWarning: Story = {
	args: {
		system: 'warning',
		contentText: '모달 본문',
	},
}

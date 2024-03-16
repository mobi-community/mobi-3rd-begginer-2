import { Modal } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Modal> = {
	component: Modal,

	args: {
		titleText: 'Modal: 모달',
		contentText:
			'모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다.군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다.',
	},

	tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const ThemeRed: Story = {
	args: {
		theme: 'red',
	},
}
export const ThemeBlue: Story = {
	args: {
		theme: 'blue',
	},
}
export const ThemeGreen: Story = {
	args: {
		theme: 'green',
	},
}
export const LayoutLandscape: Story = {
	args: {
		layout: 'landscape',
	},
}

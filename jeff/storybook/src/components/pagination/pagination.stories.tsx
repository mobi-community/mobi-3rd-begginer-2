import { Pagination } from '@/components'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta: Meta<typeof Pagination> = {
	component: Pagination,
	parameters: {
		layout: 'centered',
	},
	args: {
		curPage: 1,
		totPage: 17,
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const PerPage5: Story = {
	render: () => {
		const [curPage, setCurPage] = useState(1)
		const perPage = 5
		const totPage = 17
		return (
			<Pagination
				curPage={curPage}
				totPage={totPage}
				perPage={perPage}
				onHandlePage={setCurPage}
			/>
		)
	},
}
export const PerPage10: Story = {
	render: () => {
		const [curPage, setCurPage] = useState(1)
		const perPage = 10
		const totPage = 17
		return (
			<Pagination
				curPage={curPage}
				totPage={totPage}
				perPage={perPage}
				onHandlePage={setCurPage}
			/>
		)
	},
}

export const ThemeSecondary: Story = {
	render: () => {
		const [curPage, setCurPage] = useState(1)
		const perPage = 5
		const totPage = 17
		return (
			<Pagination
				theme='secondary'
				curPage={curPage}
				totPage={totPage}
				perPage={perPage}
				onHandlePage={setCurPage}
			/>
		)
	},
}
export const ShapeRectangle: Story = {
	render: () => {
		const [curPage, setCurPage] = useState(1)
		const perPage = 5
		const totPage = 17
		return (
			<Pagination
				shape='rectangle'
				curPage={curPage}
				totPage={totPage}
				perPage={perPage}
				onHandlePage={setCurPage}
			/>
		)
	},
}
export const SizeMedium: Story = {
	render: () => {
		const [curPage, setCurPage] = useState(1)
		const perPage = 5
		const totPage = 17
		return (
			<Pagination
				size='medium'
				curPage={curPage}
				totPage={totPage}
				perPage={perPage}
				onHandlePage={setCurPage}
			/>
		)
	},
}
export const SizeLarge: Story = {
	render: () => {
		const [curPage, setCurPage] = useState(1)
		const perPage = 5
		const totPage = 17
		return (
			<Pagination
				size='large'
				curPage={curPage}
				totPage={totPage}
				perPage={perPage}
				onHandlePage={setCurPage}
			/>
		)
	},
}
export const WeightBold: Story = {
	render: () => {
		const [curPage, setCurPage] = useState(1)
		const perPage = 5
		const totPage = 17
		return (
			<Pagination
				weight='bold'
				curPage={curPage}
				totPage={totPage}
				perPage={perPage}
				onHandlePage={setCurPage}
			/>
		)
	},
}

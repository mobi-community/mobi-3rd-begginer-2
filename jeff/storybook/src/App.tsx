import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Button, Input, Modal, Pagination, SelectBox } from './components'

const App = () => {
	const [selectedPage, setSelectedPage] = useState<number>(1)
	const totalPage = 18
	return (
		<div>
			<Input iconData={faSearch} />
			<Pagination
				size='medium'
				curPage={selectedPage}
				perPage={10}
				totPage={totalPage}
				onHandlePage={setSelectedPage}
			/>
			<Button
				theme='secondary'
				size='full'
			>
				안녕하
			</Button>
			<SelectBox
				options={[
					{
						value: 'value1',
						label: '값1',
					},
					{
						value: 'value2',
						label: '값2',
					},
				]}
			/>
			<Modal />
		</div>
	)
}

export default App

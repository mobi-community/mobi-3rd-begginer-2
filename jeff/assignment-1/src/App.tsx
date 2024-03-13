import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import reactLogo from './assets/react.svg'
import { A1Input, A1Modal } from './components'
import viteLogo from '/vite.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<A1Input
					icon={FaSearch}
					size='full'
				/>
				<a
					href='https://vitejs.dev'
					target='_blank'
				>
					<img
						src={viteLogo}
						className='logo'
						alt='Vite logo'
					/>
				</a>
				<a
					href='https://react.dev'
					target='_blank'
				>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
				<A1Modal
					size='small'
					system='alert'
					onClick={() => {}}
				/>
			</div>
			<h1>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</>
	)
}

export default App

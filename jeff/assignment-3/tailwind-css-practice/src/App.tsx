import { A3Button } from './components/A3Button'

function App() {
	return (
		<>
			<h1 className='text-primary-400 text-xl'>Hello world!</h1>
			<A3Button variant='secondary' size='small' shape='full' weight='medium'>
				관심공연
			</A3Button>
			<A3Button variant='primary' size='small' shape='full' weight='medium'>
				홈페이지
			</A3Button>
		</>
	)
}
export default App

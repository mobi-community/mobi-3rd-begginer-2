import { useState } from 'react'
import InputArea from './components/input-area'
import PrintArea from './components/print-area'
import type { TestType } from './types/test.type'

const TestObject = {
  name: '이윤신',
  age: 17,
}

const App = () => {
  const [ob, setOb] = useState<TestType>(TestObject)
  return (
    <div>
      <PrintArea ob={ob} />
      <div />
      <div />
      <InputArea addingObValue={setOb}/>
    </div>
  )
}

export default App



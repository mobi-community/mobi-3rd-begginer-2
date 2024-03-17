import { Dispatch, FormEvent, SetStateAction } from 'react'
import { TestType } from '../types/test.type'

type Props = {
  addingObValue?: Dispatch<SetStateAction<TestType>>
}

/** 사용자로 부터 받을 값을 활용해 TestType 을 확장하고, 객체의 새로운 값을 추가합니다.*/
const InputArea = ({ addingObValue }: Props) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const typeName = (e.target as HTMLFormElement).typeName.value
    const typeValue = (e.target as HTMLFormElement).typeValue.value
    
    // 여기서 질문 🙋
    // 이곳에서 type 을 확장합니다.
    // 사용자로부터 받은 typeName 을 key 이름으로 하고, 그 key 의 타입은 string 으로 하고 싶습니다.
    interface TestType {
      typeName: string
    }

    addingObValue((prev) => {
      const _prev = { ...prev }
      // 새로 추가된 key 에 대한 값으로 typeValue 를 지정합니다.
      _prev[typeName] = typeValue
      return _prev
    })
  }

  return (
    <div>
      <h1>InputArea</h1>

      <form onSubmit={onSubmit}>
        <input name='typeName'></input>
        <input name='typeValue'></input>
        <button type='submit' />
      </form>
    </div>
  )
}

export default InputArea
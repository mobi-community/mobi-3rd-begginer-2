import { TestType } from '../types/test.type'

interface Props {
  ob: TestType
}

/** object 의 모든 key */
const PrintArea = ({ ob }: Props) => {
  const keys = Object.keys(ob)
  const values = Object.values(ob)

  return (
    <div>
      <h1>PrintArea</h1>

      {keys.map((key, idx) => {
        return (
          <div key={idx}>
            <span>{key}</span>
            <span>{values[idx]}</span>
          </div>
        )
      })}
    </div>
  )
}

export default PrintArea
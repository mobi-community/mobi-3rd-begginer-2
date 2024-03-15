import { MBButton } from "./components"

const App = () => {
  return (
    <div className="inline-grid grid-cols-3 grid-rows-1 gap-1 w-[100rem] h-[50rem]  items-center ">
      <MBButton color="primary" size="sm">
        1번버튼
      </MBButton>
      <MBButton color="secondary" size="md">
        2번버튼
      </MBButton>
      <MBButton color="primary" size="lg">
        3번버튼
      </MBButton>
    </div>
  )
}

export default App

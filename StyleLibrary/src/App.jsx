import { MBButton, MBInput } from "./components"

const App = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-start items-center">
      <div className="w-[100rem] h-full">
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
        <div className=" flex flex-col gap-3">
          <MBInput pusrpose="search" hasButton={true} buttonText="제출" />
          <MBInput pusrpose="resgisterSmall" shape="round" />
          <MBInput pusrpose="resgisterNormal" hasButton={true} hasIcon={true} />
          <MBInput pusrpose="resgisterLarge" hasButton={true} shape="round" />
        </div>
      </div>
    </div>
  )
}

export default App

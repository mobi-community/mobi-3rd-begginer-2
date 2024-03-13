import { CenterBox, TextCard } from "../common"
import { MBButton } from "../stories"
import { useNavigate } from "react-router-dom"

const Main = () => {
  const navi = useNavigate()

  return (
    <CenterBox>
      <TextCard theme="positive" size="large">
        DesignTokenPratice
      </TextCard>
      <TextCard theme="notice" size="medium">
        DesignTokenPratice
      </TextCard>
      <TextCard theme="warning" size="small">
        DesignTokenPratice
      </TextCard>
      <MBButton
        theme="mainOppsite"
        radius="round"
        text="components보러가기~"
        onClick={() => navi("/components")}
      />
    </CenterBox>
  )
}

export default Main

import { CenterBox, MBSelect } from "../common"
import { MBButton } from "../stories"

const Components = () => {
  const option = [
    { name: "test1", value: 1 },
    { name: "test2", value: 2 },
    { name: "test3", value: 3 },
  ]
  return (
    <CenterBox>
      <MBButton theme="mainOppsite" text="MBTextCard" />
      <MBButton theme="mainOppsite" text="" />
      <MBButton theme="mainOppsite" text="" />
      <MBButton theme="mainOppsite" text="" />
      <MBSelect options={option} themeColor="main" />
    </CenterBox>
  )
}

export default Components

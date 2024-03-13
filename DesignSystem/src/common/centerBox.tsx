import styled from "styled-components"
import { COLOR } from "../design"
import type { ReactNode } from "react"
type CenterBoxProps = {
  children?: ReactNode //이것도 검색으로 알앗습니다 아그럼 어떻게 하죠?
}

const CenterBox = ({ children }: CenterBoxProps) => {
  return (
    <CenterContainer>
      <MainWrapper>{children}</MainWrapper>
    </CenterContainer>
  )
}

export default CenterBox

const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.grayScale[300]};
`
const MainWrapper = styled.div`
  padding-top: 10rem;
  width: 120rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`

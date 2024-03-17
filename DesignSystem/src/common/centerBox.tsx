import styled from "styled-components"
import { COLOR } from "../design"
import type { PropsWithChildren } from "react"

const CenterBox = ({ children }: PropsWithChildren) => {
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

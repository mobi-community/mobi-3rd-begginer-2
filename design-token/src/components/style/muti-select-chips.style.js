import styled from "styled-components"
import { fontSize } from "../../constants/design-tokens/font-size"

const ChipsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const ViewColor = styled.div`
    padding-left: 10px;
    font-size: ${fontSize.medium};
    width: 100px;
    height: 100px;
`

export const ChipsStyle = {
    ChipsContainer,
    ViewColor,
}
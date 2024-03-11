import styled from "styled-components";
import { COLORS } from "../constants/design-tokens/color";

const Main = () => {
    return <Wrapper></Wrapper>;
};
export default Main;

const Wrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${COLORS.GRAY[400]};
`;

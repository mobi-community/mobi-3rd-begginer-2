import styled from "styled-components";
import { COLORS } from "../designToken/color";

const Button = ({ color, width, height, text, bgColor }) => {
    return (
        <StyledButton width={width} height={height} color={color} bgColor={bgColor}>
            {text}
        </StyledButton>
    );
};
export default Button;

const StyledButton = styled.button`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    color: ${({ color }) => color || COLORS.SYSTEM.black};
    background-color: ${({ bgColor }) =>bgColor|| 'transparent'};
    border-radius: 10px;
    transition: background-color 0.3s ease;
    &:active {
        background-color: ${({ color }) => COLORS.PALLETE[color] || COLORS.MAIN[600]};
    }
`;

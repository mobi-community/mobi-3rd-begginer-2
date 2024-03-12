import styled from "styled-components";
import { COLOR } from "../designToken/color";

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
    color: ${({ color }) => COLOR.SYSTEM[color] || COLOR.SYSTEM.black};
    background-color: ${({ bgColor }) => COLOR.PALLETE[bgColor] || 'transparent'};
    border-radius: 10px;
    transition: background-color 0.3s ease;
    &:active {
        background-color: ${({ color }) => COLOR.PALLETE[color] || COLOR.MAIN[600]};
    }
`;

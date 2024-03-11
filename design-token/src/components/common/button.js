import styled from "styled-components";

const Button = ({ color, size, text }) => {
    return (
        <SButton color={color} size={size}>
            {text}
        </SButton>
    );
};

export default Button;

const SButton = styled.button`
    background: ${(props) => props.color || "#fff"};
    width: ${(props) => (props.size === "big" ? "200px" : "100px")};
    height: ${(props) => (props.size === "big" ? "80px" : "40px")};
`;

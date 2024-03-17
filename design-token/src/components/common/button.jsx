import { SButton } from "../style/button.style";

const StyledButton = ({ theme, size, text, onClick }) => {
    return (
        <SButton theme={theme} size={size} onClick={onClick}>
            {text}
        </SButton>
    );
};

export default StyledButton;

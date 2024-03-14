import { SButton } from "../../style/button.style";

const Button = ({ theme, size, text, disabled, $isActive, onClick }) => {
    const disabledTheme = "neonYellowDark";

    const buttonTheme = disabled ? disabledTheme : theme;

    return (
        <SButton
            theme={buttonTheme}
            size={size}
            onClick={onClick}
            disabled={disabled}
            isActive={$isActive}
        >
            {text}
        </SButton>
    );
};
export default Button;

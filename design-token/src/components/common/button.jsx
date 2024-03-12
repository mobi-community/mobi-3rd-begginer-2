import { SButton } from "../style/button.style";

const Button = ({ theme, size, text,}) => {
    return (
        <SButton
           theme={theme}
            size={size}
        >
            {text}
        </SButton>
    );
};

export default Button;



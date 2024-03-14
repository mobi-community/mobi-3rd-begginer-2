import { useState } from "react";
import { SButton } from "../style/button.style";

const Button = ({ theme, size, text, clickText, clickColor}) => {
    

    const [buttonText, setButtonText] = useState(text);
    const [buttonTheme, setButtonTheme] = useState(theme)

    const handleClick = () => {
        setButtonText(prev => prev === text ? clickText : text);
        setButtonTheme(prev => prev === theme ? clickColor : theme)
    }

    return (
        <SButton
            theme={buttonTheme}
            size={size}
            onClick={handleClick}
        >
            {buttonText}
        </SButton>
    );
};

export default Button;



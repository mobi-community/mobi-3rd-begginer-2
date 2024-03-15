import { SButton } from "../style/button.style";

const StyledButton = ({ theme, size, text, onClick }) => {
    // const [buttonText, setButtonText] = useState(text);
    // const [buttonTheme, setButtonTheme] = useState(theme);

    // const handleClick = () => {
    //     setButtonText((prev) => (prev === text ? clickText : text));
    //     setButtonTheme((prev) => (prev === theme ? clickColor : theme));
    // };

    return (
        <SButton theme={theme} size={size} onClick={onClick}>
            {text}
        </SButton>
    );
};

export default StyledButton;

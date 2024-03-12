import { SInput } from "../style/input.style";

const Input = ({ placeholder, theme, size }) => {
    return (
        <SInput
            type="text"
            placeholder={placeholder}
            theme={theme}
            size={size}
        />
    );
};
export default Input;

import { SInput } from "../style/input.style";

const Input = ({ type, placeholder, theme, size }) => {
    return (
        <SInput
            type={type}
            placeholder={placeholder}
            theme={theme}
            size={size}
        />
    );
};
export default Input;

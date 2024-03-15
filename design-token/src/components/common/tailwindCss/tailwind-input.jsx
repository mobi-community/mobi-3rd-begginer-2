import { inputVariants } from "./cva-input-style";

const TailwindInput = ({ variant, size, ...props }) => {
    return (
        <>
            <input className={inputVariants({ variant, size })} {...props} />
        </>
    );
};
export default TailwindInput;

import { cn } from "../../libs/utils/cn";
import { ButtonVariants } from "./cva-button-style";

export const TailwindButton = ({
    variant,
    shape,
    size,
    weight,
    children,
    ...props
}) => {
    return (
        <button
            className={cn(ButtonVariants({ variant, shape, size, weight }))}
            {...props}
        >
            {children}
        </button>
    );
};

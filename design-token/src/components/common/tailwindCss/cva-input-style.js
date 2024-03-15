import { cva } from "class-variance-authority";
import sizes from "../../../constants/design-tokens/size";
import { colors } from "../../../constants/design-tokens/color";

export const inputVariants = cva(``, {
    variants: {
        variant: {
            default: "border-neonBlue",
            success: "border-green-500",
            error: "border-red-500",
        },
        size: {
            sm: "text-sm",
            md: "text-base",
            lg: "text-lg",
        },
        weight: {
            noraml: "font-normal",
            medium: "font-medium",
            semmibold: "font-semibold",
            bold: "font-bold",
        },
        color: {
            primary: `bg-neonBlue text-neonOrange`,
            secondary: "bg-neonOrange text-neonBlue",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
        weight: "medium",
        color: "primary",
    },
});

import { cva } from "class-variance-authority";

export const ButtonVariants = cva(``, {
    variants: {
        variant: {
            more: "bg-transparent hover:underline text-black-600",
            register: "bg-black hover:bg-gray-600 text-white",
            cancel: "bg-transparent border border-gray-300 hover:bg-gray-300 hover:text-white text-gray-500",
        },
        shape: {
            square: "rounded-none",
            primary: "rounded",
            full: "rounded-full",
        },
        size: {
            sm: "text-sm py-1 px-2",
            md: "text-base py-2 px-6",
            lg: "text-lg py-3 px-6",
        },
        weight: {
            normal: "font-normal",
            medium: "font-medium",
            semibold: "font-semibold",
            bold: "font-bold",
        },
        color: {
            primary: `bg-blue-500 text-white`,
            secondary: "bg-gray-300 text-gray-700",
        },
    },
    defaultVariants: {
        variant: "more",
        shape: "square",
        size: "small",
        weight: "normal",
    },
});

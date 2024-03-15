import Button from "./button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        size: {
            control: { type: "radio" },
            options: ["small", "medium", "large"],
        },
        theme: {
            control: { type: "radio" },
            options: [
                "neonPinkDark",
                "neonGreenDark",
                "neonBlueDarkBlue",
                "neonOrangeYellow",
                "neonYellowDark",
                "neonOrangeBlue",
            ],
        },
    },
};

const Template = (args) => (
    <div>
        <Button {...args} />
    </div>
);

export const MultipulButton = Template.bind({});
MultipulButton.args = {
    size: "small",
    theme: "neonPinkDark",
    text: "button",
};

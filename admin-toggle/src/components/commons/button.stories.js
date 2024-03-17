import Button from "./button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        size: {
            description: "button의 크기를 설정해줍니다.",
            control: { type: "radio" },
            options: ["small", "medium", "large"],
        },
        theme: {
            description: "button의 색상 테마를 설정해줍니다.",
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
    tags: ["autodocs"],
};

const Template = (args) => (
    <div>
        <Button {...args}>button</Button>
    </div>
);

export const MultipulButton = Template.bind({});
MultipulButton.args = {
    size: "small",
    theme: "neonPinkDark",
};

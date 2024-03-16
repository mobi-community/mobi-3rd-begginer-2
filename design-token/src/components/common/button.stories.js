import Button from "./button";

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        shape: {
            control: "radio",
            options: ["baseType", "shaftType", "circleType"],
        },
        borderRadiusStyle: {
            control: "radio",
            options: ["square", "over", "circle"],
        },
        colorMode: {
            control: "radio",
            options: [
                "red",
                "orange",
                "yellow",
                "green",
                "sky_blue",
                "blue",
                "purple",
            ],
        },
    },
    tags: ["autodocs"],
};

const Template = (args) => (
    <div>
        <Button {...args} />
    </div>
);

export const BaseStoryWord = Template.bind({});

BaseStoryWord.args = {
    shape: "baseType",
    borderRadiusStyle: "square",
    colorMode: "red",
};

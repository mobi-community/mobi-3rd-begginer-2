import Button from "./button";

export default {
    title: "Components/Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: "medium",
    theme: "neonGreenDark",
    text: "확인",
    clickText: "클릭됨!!!",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    theme: "neonOrangeYellow",
    text: "확인",
};

export const SButton = (args) => <Button {...args}></Button>;

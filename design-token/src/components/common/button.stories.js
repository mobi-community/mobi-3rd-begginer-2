import Button from "./button";

export default {
    title: "Components/Button",
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: "medium",
    color: "primary",
    text: "확인",
    backgroundColor: "darkPurple",
    borderColor: "primary",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    color: "primary",
    text: "Large 버튼",
    backgroundColor: "secondary",
    borderColor: "primary",
};

export const SButton = (args) => <Button {...args}></Button>;

import Input from "./input";

export default {
    title: "Component/Input",
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const LightGray = Template.bind({});
LightGray.args = {
    size: "small",
    theme: "neonLigthGrayDark",
    placeholder: "text",
}

export const PinkDark = Template.bind({});
PinkDark.args = {
    size: 'large',
    theme: "neonPinkDark",
    placeholder: "test",
}

export const SInput = (args) => <Input {...args} />
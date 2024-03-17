import Input from "./common/input";

export default {
    title: "input",
    component: Input,
    argTypes: {
        size: {
            control: { type: "radio" },
            options: ["small", "medium", "large"],
        },
        color: {
            control: { type: "radio" },
            options: ["mainPurple", "teal", "green", "gray", "peach", "lemon"],
        },
    },
};
const Template = (args) => (
    <div>
        <Input {...args} />
    </div>
);

export const variableinput = Template.bind({});
variableinput.args = {
    size: "small",
    color: "teal",
    text: "input",
};

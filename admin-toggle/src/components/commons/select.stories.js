import { Select } from "./select";

export default {
    title: "Components/Select",
    component: Select,
    argTypes: {
        size: {
            control: { type: "radio" },
            options: ["small", "medium", "large"],
        },
        theme: {
            control: { type: "radio" },
            options: ["neonGreenDarkRed", "neonOrangeDarkPurple"],
        },
    },
};

const Template = (args) => <Select {...args} />;

export const MultipulSelect = Template.bind({});
MultipulSelect.args = {
    size: "small",
    theme: "neonGreenDarkRed",
    option: [
        { value: "option1", label: "옵션 1" },
        { value: "option2", label: "옵션 2" },
        { value: "option3", label: "옵션 3" },
    ],
};

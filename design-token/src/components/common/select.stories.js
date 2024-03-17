import Select from "./select";

export default {
    title: "Component/Select",
    component: Select,
}

const Template = (args) => <Select {...args} />;

export const neonGreenDarkRed = Template.bind({});
    neonGreenDarkRed.args = {
        size: "small",
        theme: "neonGreenDarkRed",
        option: [
                { value: "option1", label: "옵션 1" },
                { value: "option2", label: "옵션 2" },
                { value: "option3", label: "옵션 3" },
        ]
    }

export const neonOrangeDarkPurple = Template.bind({});
    neonOrangeDarkPurple.args = {
        size: "large",
        theme: "neonOrangeDarkPurple",
        option: [
            { value: "option1", label: "옵션 1" },
            { value: "option2", label: "옵션 2" },
            { value: "option3", label: "옵션 3" },
    ]
    }
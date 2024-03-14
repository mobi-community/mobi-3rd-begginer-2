import { useState } from "react";
import CheckBox from "./check-box";


export default {
    title: "Components/CheckBox",
    component: CheckBox,
}

const Template = (args) => {
    const [checked, setChecked] = useState(false);

    const handleCheckedChange = () => setChecked(!checked);

    return <CheckBox {...args} checked={checked} onChange={handleCheckedChange} />;
};

export const darkBlueNeonYellow = Template.bind({});
darkBlueNeonYellow.args = {
    label: "라아벨",
    theme: "darkBlueNeonYellow",
    labelColor: "secondary"
};

export const darkRedNeonGreen = Template.bind({});
darkRedNeonGreen.args = {
    label: "라아아아벨",
    theme: "darkRedNeonGreen",
    labelColor: "default",
};
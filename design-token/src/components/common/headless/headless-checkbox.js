import { useState } from "react";

export const HeadlessCheckBox = ({ children, deflaultChecked = false }) => {
    const [checked, setChecked] = useState(deflaultChecked);

    const toggle = () => setChecked((current) => !current);

    return children({ checked, toggle });
};

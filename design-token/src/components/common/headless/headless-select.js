import { useState } from "react";

export const HeadlessSelect = ({ children, options, defaultSelected }) => {
    const [selected, setSelected] = useState(defaultSelected);

    const select = (value) => setSelected(value);

    return children({ selected, options, select });
};

// import { StyleBtn } from "../styleTheme/button.style";

import Button from "@mui/material/Button";
import { COLORS } from "../../designToken/color";
import { SIZES } from "../../designToken/size";

const MButton = ({ text, color, size }) => {
    const buttonStyle = {
        background: COLORS.PALLETE[color]?.base || COLORS.PALLETE.green.base,
        color: COLORS.SYSTEM.black,
        width: SIZES.BUTTON[size]?.width || SIZES.BUTTON.medium.width,
        height: SIZES.BUTTON[size]?.height || SIZES.BUTTON.medium.height,
    };

    return (
        <Button variant="contained" sx={buttonStyle}>
            {text}
        </Button>
    );
};
export default MButton;

import { css } from "styled-components";
import { COLORS } from "../../designToken/color";

const ButtonColorCss= {
    mainPuple: {css:css`
    background-color: ${COLORS.MAIN.base};
    color: ${COLORS.SYSTEM.black};
     `},
    teal: {css:css`
    background-color: ${COLORS.PALLETE.teal.base};
    color: ${COLORS.SYSTEM.black};
    `},
    green: {css:css`
    background-color: ${COLORS.PALLETE.green.base};
    color: ${COLORS.SYSTEM.black};
   `},
    gray: {css:css`
    background-color: ${COLORS.PALLETE.gray.base};
    color: ${COLORS.SYSTEM.black};
    `},
    peach: {css:css`
    background-color: ${COLORS.PALLETE.peach};
    color: ${COLORS.SYSTEM.black};
    `},
    lemon: {css:css`
    background-color: ${COLORS.PALLETE.lemon};
    color: ${COLORS.SYSTEM.black};
    `},

}

const ButtonSizeCss = {
    
}
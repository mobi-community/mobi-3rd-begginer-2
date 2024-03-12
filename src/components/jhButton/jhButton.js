import { css, styled } from "styled-components";
import { COROLS } from "../../styles/color";
import React from "react";

const JHButton = ({ children, variant, size, font, ...rest }) => {
  return (
    <Button variant={variant} size={size} font={font} {...rest}>
      {children}
    </Button>
  );
};
export default JHButton;

const variantCSS = {
  primary: css`
    background-color: ${COROLS.primary.default};
    &:hover {
      background-color: ${COROLS.primary.hover};
    }
  `,
  secondary: css`
    background-color: ${COROLS.secondary.default};
    &:hover {
      background-color: ${COROLS.secondary.hover};
    }
  `,
};
const sizeCSS = {
  smallCircle: css`
    width: 30px;
  `,
  mediumCircle: css`
    width: 60px;
  `,
  largeCircle: css`
    width: 90px;
  `,
};
const fontCSS = {
  small: css`
    font-size: 14px;
    font-weight: 800;
  `,
  medium: css`
    font-size: 16px;
    font-weight: 400;
  `,
  large: css`
    font-size: 26px;
    font-weight: 700;
  `,
};

const Button = styled.button`
  cursor: pointer;
  transition: all 0.6s;
  /* button reset CSS */
  border: none;
  outline: none;
  border-radius: 50%;
  aspect-ratio: 1/1;
  color: ${COROLS.grayScale.white};

  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]} 
  ${({ font }) => fontCSS[font]};
`;

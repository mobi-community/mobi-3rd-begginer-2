import { css, styled } from "styled-components";

const JHInput = ({ variant, size, font, ...inputProps }) => {
  return (
    <>
      <Input variant={variant} size={size} font={font} {...inputProps} />
    </>
  );
};
export default JHInput;

const variantCSS = {
  primary: css`
    background-color: #ffce95;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #ffce95;
      border: 1px solid #ffce95;
    }
  `,

  secondary: css`
    background-color: #5fb751;
    color: #fff;
    &:hover {
      background-color: #fff;
      color: #0f6b00;
      border: 1px solid #5fb751;
    }
  `,
};
const sizeCSS = {
  smallCircle: css`
    width: 297px;
    height: 41px;
    border-radius: 50%;
  `,

  largeCircle: css`
    width: 550px;
    height: 44px;
    border-radius: 50px;
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

const Input = styled.button`
  transition: all 0.6s;
  /* button reset CSS */
  border: none;
  outline: none;

  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
    ${({ font }) => fontCSS[font]}
`;

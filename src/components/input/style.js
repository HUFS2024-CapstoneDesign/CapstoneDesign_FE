import styled, { css } from "styled-components";

const variantCSS = {
  white: css`
    background-color: ${({theme})=>theme.PALETTE.background["white"]};
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 50px;
    border: solid 1px #000;
  `,
};

const sizeCSS = {
  small: css`
    width: 602px;
    height: 115px;
  `,

  medium: css`
  width: 764px;
  height: 115px;
  `,

};

const colorCSS = {

  black: css`
    color: #000;
  `
};

const Input = styled.input`

  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  ${({ color }) => colorCSS[color]}
  border: none;
`;

export default Input;

import styled, { css } from "styled-components";

const variantCSS = {
  main: css`
    background-color: ${({theme})=> theme.PALETTE.primary["main_deep"]};
  `,
  main_soft: css`
  background-color: ${({theme})=>theme.PALETTE.primary["main_soft"]};
`,
  sub:css`
  background-color: ${({theme})=>theme.PALETTE.sub["sub"]};
  `
};

const shapeCSS = {
  default: css`
  border-radius: 50px;
  border : none;`
};

const sizeCSS = {
  small: css`
    width: 245px;
    height: 80px;
  `,

  medium: css`
    width: 345px;
    height: 100px;
  `
};

const colorCSS = {
  white: css`
    color: #fff;
    font-weight: ${({theme})=>theme.FONT_WEIGHT["semibold"]};
    font-size: ${({theme})=>theme.FONT_SIZE["default"]};
  `,

  black: css`
    color: #000;
    font-weight: ${({theme})=>theme.FONT_WEIGHT["semibold"]};
  `,
};

const Button = styled.button`
  cursor: pointer;

  ${({ variant }) => variantCSS[variant]}
  ${({ shape }) => shapeCSS[shape]}
  ${({ size }) => sizeCSS[size]}
  ${({ color }) => colorCSS[color]}
`;

export default Button;

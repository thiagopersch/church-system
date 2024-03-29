import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  ::selection {
    ${({ theme }) => css`
      color: ${theme.colors.black};
      background-color: ${theme.colors.primary};
    `}
    }
  
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.white};
      font-size: ${theme.fonts.sizes.small};
      font-family: ${theme.fonts.family.primary};
      color: ${theme.colors.black};
      outline: none;
    `}
  }

  button, a {
      cursor: pointer;
      text-decoration: none !important;
    }
`;
export default GlobalStyles;

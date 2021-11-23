import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ::selection {
    background: ${({ theme }) => theme.colors.primary.main.color};
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
  ::-webkit-scrollbar {
    width: .5rem;
    height: .5rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.tertiary.main.color};
    border-radius: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary.light.color};
  }
  }

  ${normalize}

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
  }

  html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;


import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

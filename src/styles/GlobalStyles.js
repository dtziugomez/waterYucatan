
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap');

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

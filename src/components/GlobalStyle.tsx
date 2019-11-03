import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  html * {
    font-family: 'Roboto',-apple-system,BlinkMacSystemFont,'Helvetica Neue',Helvetica,sans-serif;
  }
  .react-select {
    & > div.select__control {
      border-color: #ccc;
      box-shadow: none;
      &:focus: {
        background: #eee

      }
    }
    & input:focus {
      background: #eee
    }
  }
`;

export default GlobalStyle;

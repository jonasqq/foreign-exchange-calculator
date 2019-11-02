import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

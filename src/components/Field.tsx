import styled from 'styled-components';

const borderRadius = '5px';

export const Input = styled.input`
  border-radius: ${borderRadius};
  border: 1px solid #ccc;
  height: 40px;
  padding: 5px 8px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const InputGroup = styled.div`
  & > * {
    display: inline-block;
    width: auto;
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
  }
  & > *:first-child {
    border-top-left-radius: ${borderRadius};
    border-bottom-left-radius: ${borderRadius};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin-top: 1px;
    & > div:not(.select__menu) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  & > *:last-child {
    border-top-right-radius: ${borderRadius};
    border-bottom-right-radius: ${borderRadius};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    & > div {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  button {
    width: auto;
    margin-top: 2px;
  }
`;

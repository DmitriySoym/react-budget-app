import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 15px 20px;
  font-size: 16px;
  background: #ffffff;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  &::-webkit-input-placeholder {
    color: #999999;
  }
  &::-moz-placeholder {
    color: #999999;
  }

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type="number"],
  &[type="number"]:hover,
  &[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  &,
  &:hover,
  &:focus {
    appearance: none;
    -moz-appearance: textfield;
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  &:focus:focus::-moz-placeholder {
    color: transparent;
  }

  &:focus:focus:-moz-placeholder {
    color: transparent;
  }

  &:focus:focus:-ms-input-placeholder {
    color: transparent;
  }
`;

export { StyledInput };

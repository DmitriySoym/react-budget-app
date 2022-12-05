import styled from "styled-components";

const StyledBudget = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-column: span 2;
  height: 100px;
  padding: 32px 20px;
  background: #7cc6fe;
  border-radius: 10px;
`;

const Input = styled.input`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background-color: inherit;
  &::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  &::-moz-placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
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

const Button = styled.button`
  width: 85px;
  height: 36px;
  background: #ffffff;
  border-radius: 10px;
`;

const Amount = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export { StyledBudget, Input, Button, Amount };

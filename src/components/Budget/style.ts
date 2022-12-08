import styled from "styled-components";

const StyledBudget = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  grid-column: span 2;
  height: 60px;
  padding: 12px 20px;
  background: #7cc6fe;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 80%;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  background-color: inherit;
  align-self: center;

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

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  width: 85px;
  height: 36px;
  background: #ffffff;
  border-radius: 10px;
`;

const Amount = styled.div`
  align-self: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

export { StyledBudget, Input, Button, Amount };

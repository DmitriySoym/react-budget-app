import styled from "styled-components";
import deleteButton from "../../assets/button-delete.svg";

const Span = styled.span`
  font-size: 16px;
  line-height: 19px;
  color: #000000;
`;

const ExpensesItem = styled.li`
  display: grid;
  grid-template-columns: 1.3fr 0.2fr 0.1fr;
  align-items: center;
  grid-template-rows: 20px;
  padding: 15px 20px;
  height: 50px;
  border-bottom: 2px solid rgb(204, 213, 255);
`;

const ButtonDelete = styled.button`
  width: 15px;
  height: 15px;
  margin-left: 20px;
  background: url(${deleteButton}) no-repeat;
`;

export { Span, ExpensesItem, ButtonDelete };

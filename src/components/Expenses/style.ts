import styled from "styled-components";

const StyledExpenses = styled.section`
  display: grid;
  grid-template-rows: 55px 95px;
  grid-auto-rows: 100%;
  padding: 30px 20px 53px;
`;

const EmptyList = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 24px;
`;

export { StyledExpenses, EmptyList };

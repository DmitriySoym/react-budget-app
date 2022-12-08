import styled from "styled-components";

const StyledExpenses = styled.section`
  display: grid;
  grid-template-rows: 55px 95px;
  padding: 30px 20px 53px;

  @media (max-width: 640px) {
    padding: 30px 0 53px;
  }
`;

const EmptyList = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 24px;
`;

export { StyledExpenses, EmptyList };

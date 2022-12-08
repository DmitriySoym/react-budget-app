import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid: 0.5fr 1fr 1fr 1fr / repeat(2, 1fr);
  row-gap: 20px;
  padding: 30px 20px 53px;

  @media (max-width: 640px) {
    padding: 30px 0 33px;
  }
`;

export { StyledHeader };

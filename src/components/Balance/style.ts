import styled from "styled-components";

const StyledBalance = styled.div<{ $isOverspended: boolean }>`
  display: flex;
  align-items: center;
  grid-column: span 2;
  height: 60px;
  padding: 12px 20px;
  background: ${({ $isOverspended }) => ($isOverspended ? "#FF0000" : "#ccd5ff")};
  border-radius: 10px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export { StyledBalance };

import styled from "styled-components";

const List = styled.ul`
  max-height: 250px;
  height: 100%;
  overflow: auto;
`;

const EmptyList = styled.div`
  text-align: center;
  font-size: 20px;
  line-height: 24px;
`;

export { List, EmptyList };

import { CustomSelect, Title, Budget, Balance, Spent } from "components";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <Title value="Budget App" />
      <CustomSelect />
      <Budget />
      <Balance />
      <Spent />
    </StyledHeader>
  );
};

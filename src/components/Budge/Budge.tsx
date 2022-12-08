import { useCurrencyContext } from "context";
import { StyledBudge } from "./style";

interface IProps {
  cost: number;
}

export const Budge = ({ cost }: IProps) => {
  const { currentCurrensy } = useCurrencyContext();
  return (
    <StyledBudge>
      {currentCurrensy.value}
      {cost}
    </StyledBudge>
  );
};

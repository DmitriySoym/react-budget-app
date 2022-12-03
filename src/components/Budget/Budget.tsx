import { useCurrencyContext } from "context";
import { StyledBudget } from "./style";

export const Budget = () => {
  const { currentCurrensy } = useCurrencyContext();
  return <StyledBudget>Budget: {currentCurrensy.value}</StyledBudget>;
};

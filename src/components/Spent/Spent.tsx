import { useCurrencyContext, useBudgetContext } from "context";
import { StyledSpent } from "./style";

export const Spent = () => {
  const { currentCurrensy } = useCurrencyContext();
  const { budget } = useBudgetContext();
  return (
    <StyledSpent>
      Spent: {currentCurrensy.value} {budget}
    </StyledSpent>
  );
};

import { useCurrencyContext, useBudgetContext } from "context";
import { StyledBalance } from "./style";

export const Balance = () => {
  const { currentCurrensy } = useCurrencyContext();
  const { budget } = useBudgetContext();

  return (
    <StyledBalance>
      Remaining: {currentCurrensy.value}
      {budget}
    </StyledBalance>
  );
};

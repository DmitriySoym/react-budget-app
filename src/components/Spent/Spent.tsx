import { useCurrencyContext, useExpensesContext } from "context";
import { StyledSpent } from "./style";

export const Spent = () => {
  const { currentCurrensy } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spentValue = expenses.reduce((accum, expenses) => accum + +expenses.cost, 0);

  return (
    <StyledSpent>
      Spent so far: {currentCurrensy.value}
      {spentValue}
    </StyledSpent>
  );
};

import { useCurrencyContext, useExpensesContext } from "context";
import { StyledSpent } from "./style";

export const Spent = () => {
  const { currentCurrency } = useCurrencyContext();
  const { expenses } = useExpensesContext();

  const spentValue = expenses.reduce((spent, { cost }) => spent + +cost, 0);

  return (
    <StyledSpent>
      Spent so far: {currentCurrency.value}
      {spentValue}
    </StyledSpent>
  );
};

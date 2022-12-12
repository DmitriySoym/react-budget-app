import { useCurrencyContext, useBudgetContext, useExpensesContext } from "context";
import { StyledBalance } from "./style";

export const Balance = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const balance = budget - expenses.reduce((total, { cost }) => total + +cost, 0);

  const isOverspending = balance < 0;

  return (
    <StyledBalance $isOverspended={isOverspending}>
      {isOverspending ? "Overspending by: " : "Remaining: "}
      {currentCurrency.value}
      {Math.abs(balance)}
    </StyledBalance>
  );
};

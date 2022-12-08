import { useCurrencyContext, useBudgetContext, useExpensesContext } from "context";
import { useEffect, useState } from "react";
import { StyledBalance } from "./style";

export const Balance = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const [overspending, setOverspending] = useState(false);

  const balance = budget - expenses.reduce((total, { cost }) => total + +cost, 0);

  useEffect(() => {
    balance < 0 ? setOverspending(true) : setOverspending(false);
  }, [balance]);

  return (
    <StyledBalance $isOverspended={overspending}>
      {overspending ? "Overspending by: " : "Remaining: "}
      {currentCurrency.value}
      {Math.abs(balance)}
    </StyledBalance>
  );
};

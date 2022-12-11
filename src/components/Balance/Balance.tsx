import { useCurrencyContext, useBudgetContext, useExpensesContext } from "context";
import { useEffect, useState } from "react";
import { StyledBalance } from "./style";

export const Balance = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget } = useBudgetContext();
  const { expenses } = useExpensesContext();

  const [isOverspending, setIsOverspending] = useState(false);

  const balance = budget - expenses.reduce((total, { cost }) => total + +cost, 0);

  useEffect(() => {
    balance < 0 ? setIsOverspending(true) : setIsOverspending(false);
  }, [balance]);

  return (
    <StyledBalance $isOverspended={isOverspending}>
      {isOverspending ? "Overspending by: " : "Remaining: "}
      {currentCurrency.value}
      {Math.abs(balance)}
    </StyledBalance>
  );
};

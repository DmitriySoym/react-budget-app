import { StyledExpenses } from "./style";
import { Title, SearchInput, ExpensesList } from "components";
import { useExpensesContext } from "context";
import { useEffect, useState } from "react";
import { useInput, useDebounce } from "hooks";
import { IExpense } from "types/idex";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpense[]>(expenses);
  const debauncedValue = useDebounce(search.value, 500);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase())),
    );
  }, [expenses, debauncedValue]);

  return (
    <StyledExpenses>
      <Title value="Expenses" />
      <SearchInput {...search} />
      <ExpensesList expenses={filteredExpenses} />
    </StyledExpenses>
  );
};

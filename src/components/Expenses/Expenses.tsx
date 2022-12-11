import { StyledExpenses } from "./style";
import { Title, SearchInput, ExpensesList } from "components";
import { useExpensesContext } from "context";
import { useEffect, useState } from "react";
import { IExpense } from "context/ExpensesContext/types";
import { useInput, useDebounce } from "hooks";

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

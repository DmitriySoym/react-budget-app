import { StyledExpenses, EmptyList } from "./style";
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
    console.log(expenses);
  }, [expenses, debauncedValue]);

  return (
    <StyledExpenses>
      <Title value="Expenses" />
      <SearchInput {...search} type="serch" placeholder="search ..." name="search" />
      {expenses.length ? (
        <ExpensesList expenses={filteredExpenses} />
      ) : (
        <EmptyList>Oooops 🙈</EmptyList>
      )}
    </StyledExpenses>
  );
};

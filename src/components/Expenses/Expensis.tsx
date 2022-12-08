import { StyledExpenses, EmptyList } from "./style";
import { Title, SearchInput, ExpensesList } from "components";
import { useExpensesContext } from "context";
import { useEffect, useState } from "react";
import { IExpenses } from "context/ExpensesContext/types";
import { useInput } from "hooks";

export const Expenses = () => {
  const search = useInput();
  const { expenses } = useExpensesContext();
  const [filteredExpenses, setFilteredExpenses] = useState<IExpenses[]>(expenses);

  useEffect(() => {
    setFilteredExpenses(
      expenses.filter((expense) => expense.name.toLowerCase().includes(search.value.toLowerCase())),
    );
  }, [search.value, expenses]);

  return (
    <StyledExpenses>
      <Title value="Expenses" />
      <SearchInput type="serch" placeholder="search ..." name="search" />
      {expenses.length ? (
        <ExpensesList expensesList={filteredExpenses} />
      ) : (
        <EmptyList>Oooops 🙈</EmptyList>
      )}
    </StyledExpenses>
  );
};

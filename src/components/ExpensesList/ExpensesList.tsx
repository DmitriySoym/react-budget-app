import { ExpensesListItem } from "..";
import { IExpense } from "context/ExpensesContext/types";
import { List, EmptyList } from "./style";

interface IProps {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: IProps) => {
  return !expenses.length ? (
    <EmptyList>Oooops 🙈</EmptyList>
  ) : (
    <List>
      {expenses.map((expense) => (
        <ExpensesListItem {...expense} key={expense.id} />
      ))}
    </List>
  );
};

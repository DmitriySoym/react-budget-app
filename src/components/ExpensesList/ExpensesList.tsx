import { IExpense } from "types/idex";
import { ExpensesItem } from "..";
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
        <ExpensesItem expense={expense} key={expense.id} />
      ))}
    </List>
  );
};

import { ExpensesListItem } from "..";
import { IExpense } from "context/ExpensesContext/types";
import { List } from "./style";

interface IProps {
  expenses: IExpense[];
}

export const ExpensesList = ({ expenses }: IProps) => {
  return (
    <List>
      {expenses.map(({ name, cost, id }) => (
        <ExpensesListItem name={name} cost={cost} id={id} key={id} />
      ))}
    </List>
  );
};

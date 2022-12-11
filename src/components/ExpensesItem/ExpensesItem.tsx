import { useExpensesContext } from "../../context";
import { Budge } from "components";
import { Span, StyledExpensesItem, ButtonDelete } from "./style";
import { IExpense } from "types/idex";

interface IProps {
  expense: IExpense;
}

export const ExpensesItem = ({ expense }: IProps) => {
  const { removeExpense } = useExpensesContext();

  const handleRemove = () => {
    removeExpense(expense.id);
  };

  return (
    <StyledExpensesItem>
      <Span>{expense.name}</Span>
      <Budge>{expense.cost}</Budge>
      <ButtonDelete type="button" onClick={handleRemove} />
    </StyledExpensesItem>
  );
};

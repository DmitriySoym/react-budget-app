import { useCurrencyContext, useExpensesContext } from "../../context";
import { Budge } from "components";
import { Span, ExpensesItem, ButtonDelete } from "./style";

interface IProps {
  name: string;
  cost: number;
  id: string;
}

export const ExpensesListItem = ({ name, cost, id }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  const { removeExpense } = useExpensesContext();

  const handleRemove = () => {
    removeExpense(id);
  };

  return (
    <ExpensesItem>
      <Span>{name}</Span>
      <Budge>{cost}</Budge>
      <ButtonDelete type="button" onClick={handleRemove} />
    </ExpensesItem>
  );
};

import { Budge } from "components";

interface IProps {
  cost: number;
}

export const ExpensesListItem = ({ cost }: IProps) => {
  return (
    <div>
      <Budge cost={cost} />
    </div>
  );
};

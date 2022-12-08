import { useExpensesContext } from "context";

export const ExpensesList = () => {
  const { expenses } = useExpensesContext();
  console.log(expenses);

  return (
    <ul>
      {" "}
      {expenses.map(({ name, cost, id }) => (
        <li>
          {" "}
          name={name} price={cost} id={id} key={id}
        </li>
      ))}
    </ul>
  );
};

import { ReactNode } from "react";

export interface IExpenses {
  name: string;
  cost: number;
  id: string;
}

export interface IExpensesContext {
  expenses: IExpenses[];
  newExpense: (newExpense: IExpenses) => void;
  removeExpense: (id: string) => void;
}

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

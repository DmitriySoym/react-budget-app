import { ReactNode } from "react";

export interface IExpense {
  name: string;
  cost: number;
  id: string;
}

export interface IExpensesContext {
  expenses: IExpense[];
  addNewExpense: (newExpense: IExpense) => void;
  removeExpense: (id: string) => void;
}

export interface IExpensesContextProviderProps {
  children: ReactNode;
}

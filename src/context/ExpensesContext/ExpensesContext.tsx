import { createContext, useContext, useState } from "react";
import { IExpensesContext, IExpensesContextProviderProps } from "./types";

export const ExpensesContext = createContext<IExpensesContext>({} as IExpensesContext);

const useExpensesContextValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => ({
    expenses: [],
    newExpense: (newExpense) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, newExpense],
      }));
    },
    removeExpense: (id) => {
      setExpensesContext((ctx) => ({
        ...ctx,
        expenses: ctx.expenses.filter((expense) => expense.id !== id),
      }));
    },
  }));
  return expensesContext;
};

export const ExpensesContextProvider = ({ children }: IExpensesContextProviderProps) => {
  return (
    <ExpensesContext.Provider value={useExpensesContextValue()}>
      {children}
    </ExpensesContext.Provider>
  );
};

export const useExpensesContext = () => useContext<IExpensesContext>(ExpensesContext);

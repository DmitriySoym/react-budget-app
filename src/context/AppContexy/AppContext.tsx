import { FC, ReactNode } from "react";

import { BudgetContextProvider } from "context/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "context/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "context/ExpensesContext/ExpensesContext";

const providers = [BudgetContextProvider, CurrencyContextProvider, ExpensesContextProvider];

export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {providers.reduce((acc, Component) => {
        return <Component>{acc}</Component>;
      }, children)}
    </>
  );
};

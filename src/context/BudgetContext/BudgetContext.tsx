import { createContext, useContext, useState } from "react";
import { IBudgetContext, IBudgetContextProviderProps } from "./types";

const BudgetContext = createContext<IBudgetContext>({} as IBudgetContext);

export const BudgetContextProvider = ({ children }: IBudgetContextProviderProps) => {
  return (
    <BudgetContext.Provider value={useBudgetProviderValue()}>{children}</BudgetContext.Provider>
  );
};

const useBudgetProviderValue = () => {
  const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
    budget: 0,
    setBudget: (value) => {
      setBudgetContext((ctx) => ({ ...ctx, budget: value }));
    },
  }));

  return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

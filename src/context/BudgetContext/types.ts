import { ReactNode } from "react";

export interface IBudgetContext {
  budget: number;
  setBudget: (budget: number) => void;
}

export interface IBudgetContextProviderProps {
  children: ReactNode;
}

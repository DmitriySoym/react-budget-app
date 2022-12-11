import { Currency } from "config";
import { ReactNode } from "react";

export interface IBudgetContext {
  budget: number;
  setBudget: (budget: number) => void;
}

export interface IBudgetContextProviderProps {
  children: ReactNode;
}

export interface ICurrencyContextProviderProps {
  children: ReactNode;
}

export interface ICurrency {
  label: keyof typeof Currency;
  value: Currency;
}

export interface ICurrencyContext {
  currencies: ICurrency[];
  currentCurrency: ICurrency;
  setNewCurrency: (option: ICurrency) => void;
}

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

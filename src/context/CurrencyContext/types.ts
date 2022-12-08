import { Currency } from "config";
import { ReactNode } from "react";

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

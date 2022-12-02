import { createContext, useState } from "react";
import { ICurrencyContext, ICurrencyContextProviderProps, ICurrency } from "./types";
import { Currency } from "config";

export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currencies: [
      {
        label: "USD",
        value: Currency.USD,
      },
      {
        label: "BYN",
        value: Currency.BYN,
      },
      {
        label: "EUR",
        value: Currency.EUR,
      },
      {
        label: "GBR",
        value: Currency.GBR,
      },
    ],
  }));

  return currencyContext;
};

export const CurrencyContexyProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};

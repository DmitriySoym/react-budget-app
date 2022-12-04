import { createContext, useContext, useState } from "react";
import { ICurrencyContext, ICurrencyContextProviderProps, ICurrency } from "./types";
import { Currency } from "config";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currentCurrensy: {
      label: "USD",
      value: Currency.USD,
    },

    currencies: [
      {
        label: "USD",
        value: Currency.USD,
      },
      {
        label: "EUR",
        value: Currency.EUR,
      },
      {
        label: "GBR",
        value: Currency.GBR,
      },
      {
        label: "BYN",
        value: Currency.BYN,
      },
    ],

    setNewCurrency: (currentCurrensy) => {
      setCurrencyContext((ctx) => ({ ...ctx, currentCurrensy }));
    },
  }));

  return currencyContext;
};

export const useCurrencyContext = () => useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};

import { createContext, useContext, useState } from "react";

import { Currency } from "config";
import { ICurrencyContext, ICurrencyContextProviderProps } from "types/idex";

const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    currentCurrency: {
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

    setNewCurrency: (currentCurrency) => {
      setCurrencyContext((ctx) => ({ ...ctx, currentCurrency }));
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

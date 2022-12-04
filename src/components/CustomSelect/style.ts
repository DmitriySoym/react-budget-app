import { StylesConfig } from "react-select";
import { ICurrency } from "context/CurrencyContext/types";

export const customStyles: StylesConfig<ICurrency> = {
  container: (baseStyles) => ({
    ...baseStyles,
    alignSelf: "flex-start",
    justifySelf: "end",
    justifyItems: "end",
    boxShadow: "none",
    width: 93,
  }),
};

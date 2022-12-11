import { StylesConfig } from "react-select";
import { ICurrency } from "types/idex";

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

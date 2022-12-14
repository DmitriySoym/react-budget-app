import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "context";
import { customStyles } from "./style";

export const CustomSelect = () => {
  const { currencies, currentCurrency, setNewCurrency } = useCurrencyContext();

  const handleSelect = (option: SingleValue<typeof currentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      value={currentCurrency}
      onChange={handleSelect}
      isMulti={false}
      isSearchable={false}
      styles={customStyles}
    />
  );
};

import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "context";
import { customStyles } from "./style";

export const CustomSelect = () => {
  const { currencies, currentCurrensy, setNewCurrency } = useCurrencyContext();

  const handleSelect = (option: SingleValue<typeof currentCurrensy>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      options={currencies}
      value={currentCurrensy}
      onChange={handleSelect}
      isMulti={false}
      isSearchable={false}
      styles={customStyles}
    />
  );
};

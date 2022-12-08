import { useExpensesContext } from "context";
import { useInput, useDebounce } from "hooks";
import { ChangeEvent, useEffect } from "react";
import { StyledInput } from "./style";

interface ISearchInput {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ type, placeholder, name, value, onChange }: ISearchInput) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

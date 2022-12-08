import { useExpensesContext } from "context";
import { useInput, useDebounce } from "hooks";
import { useEffect } from "react";
import { StyledInput } from "./style";

interface ISearchInput {
  type: string;
  placeholder: string;
  name: string;
}

export const SearchInput = ({ type, placeholder, name }: ISearchInput) => {
  return <StyledInput type={type} placeholder={placeholder} name={name} />;
};

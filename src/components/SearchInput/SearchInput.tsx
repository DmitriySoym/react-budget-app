import { ChangeEvent } from "react";
import { StyledInput } from "./style";

interface ISearchInput {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ value, onChange }: ISearchInput) => {
  return (
    <StyledInput
      type="search"
      placeholder="search ..."
      name="search"
      value={value}
      onChange={onChange}
    />
  );
};

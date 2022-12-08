import { useCurrencyContext } from "context";
import { ReactNode } from "react";
import { StyledBudge } from "./style";

interface IProps {
  children: ReactNode;
}

export const Budge = ({ children }: IProps) => {
  const { currentCurrency } = useCurrencyContext();
  return (
    <StyledBudge>
      {currentCurrency.value}
      {children}
    </StyledBudge>
  );
};

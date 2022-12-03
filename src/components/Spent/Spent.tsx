import { useCurrencyContext } from "context";
import { StyledSpent } from "./style";

export const Spent = () => {
  const { currentCurrensy } = useCurrencyContext();
  return <StyledSpent>Spent: {currentCurrensy.value}</StyledSpent>;
};

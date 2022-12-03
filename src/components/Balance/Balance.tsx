import { useCurrencyContext } from "context";
import { StyledBalance } from "./style";

export const Balance = () => {
  const { currentCurrensy } = useCurrencyContext();
  return <StyledBalance>Remaining: {currentCurrensy.value}</StyledBalance>;
};

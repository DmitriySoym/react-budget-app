import { useState, ChangeEvent, useEffect } from "react";
import { useBudgetContext, useCurrencyContext } from "context";
import { StyledBudget, Input, Button } from "./style";
import { useInput } from "hooks/useInput";

export const Budget = () => {
  const [buttonState, setButtonState] = useState("Save");
  const { currentCurrensy } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const budgetAmount = useInput();

  const handleChange = () => {
    setBudget(+budgetAmount.value);
    console.log(budget);
  };

  useEffect(() => {
    +budgetAmount.value > 0 ? setButtonState("Edit") : setButtonState("Save");
  });
  return (
    <StyledBudget>
      <Input type="number" name="budget" placeholder="Enter  budget ..." {...budgetAmount} />
      <Button onClick={handleChange}>{buttonState}</Button>
      {/* Budget: {currentCurrensy.value} */}
    </StyledBudget>
  );
};

import { useState } from "react";
import { useBudgetContext, useCurrencyContext } from "context";
import { StyledBudget, Input, Button, Amount } from "./style";
import { useInput, useToggle } from "hooks";

export const Budget = () => {
  const { currentCurrensy } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isActiveInput, toggleIsActiveInput] = useToggle();
  const budgetAmount = useInput();

  const handleSave = () => {
    setBudget(+budgetAmount.value);
    toggleIsActiveInput();
  };

  const handleEdit = () => toggleIsActiveInput();

  return (
    <StyledBudget>
      {!isActiveInput ? (
        <>
          <Input {...budgetAmount} placeholder="Enter Budget ..." type="number" />
          <Button onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <Amount>
            Budget: {currentCurrensy.value}
            {budget}
          </Amount>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )}
    </StyledBudget>
  );
};

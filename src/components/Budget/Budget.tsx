import { useBudgetContext, useCurrencyContext } from "context";
import { StyledBudget, Input, Button, Amount } from "./style";
import { useInput, useToggle } from "hooks";

export const Budget = () => {
  const { currentCurrency } = useCurrencyContext();
  const { budget, setBudget } = useBudgetContext();
  const [isEditMode, toggleIsEditMode] = useToggle();
  const budgetAmount = useInput();

  const handleSave = () => {
    setBudget(+budgetAmount.value);
    toggleIsEditMode();
  };

  const handleEdit = () => toggleIsEditMode();

  return (
    <StyledBudget>
      {!isEditMode ? (
        <>
          <Input {...budgetAmount} placeholder="Enter Budget ..." type="number" />
          <Button onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <Amount>
            Budget: {currentCurrency.value}
            {budget}
          </Amount>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )}
    </StyledBudget>
  );
};

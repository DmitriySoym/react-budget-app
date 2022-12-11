import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm, Input, Error } from "./style";
import { Button, Title } from "../";
import { v4 } from "uuid";
import { useBudgetContext, useExpensesContext } from "../../context";

interface IFormInfo {
  name: string;
  cost: number;
  id: string;
}

export const Form = () => {
  const { budget } = useBudgetContext();
  const { addNewExpense } = useExpensesContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInfo>();

  const onSubmit: SubmitHandler<IFormInfo> = ({ name, cost }) => {
    if (budget > 0) {
      addNewExpense({ name, cost, id: v4() });
      reset();
    } else {
      alert("Your budget is empty. Please, enter your badget value.");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title value="Add Expense" />
      <Input
        type="text"
        maxLength={20}
        placeholder="enter name ..."
        {...register("name", {
          required: "Enter name of your expense",
          minLength: { value: 3, message: "Name length minimum 3 symbols" },
        })}
      />
      {errors.name && <Error>{errors.name.message}</Error>}
      <Input
        type="number"
        placeholder="enter cost ..."
        {...register("cost", {
          required: "Enter your expense price",
          max: { value: 999999999, message: "Enter real cost" },
        })}
      />
      {errors.cost && <Error>{errors.cost.message}</Error>}
      <Button label="Done" type="submit" />
    </StyledForm>
  );
};

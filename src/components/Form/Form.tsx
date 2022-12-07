import { useForm, SubmitHandler } from "react-hook-form";
import { StyledForm, Input, Error } from "./style";
import { Button, Title } from "../";
import { v4 as uuidv4 } from "uuid";
import { useBudgetContext } from "../../context";

interface IFormInfo {
  name: string;
  cost: number;
}

export const Form = () => {
  const { budget } = useBudgetContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInfo>();

  const onSubmit: SubmitHandler<IFormInfo> = ({ name, cost }) => {
    reset();
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
          minLength: { value: 3, message: "Name length manimum 3 symbols" },
        })}
      />
      {errors.name && <Error>{errors.name.message}</Error>}
      <Input
        type="number"
        placeholder="enter cost ..."
        {...register("cost", {
          required: "Enter your expense price",
          max: { value: 999999, message: "Max cost 999999, enter real cost" },
        })}
      />
      {errors.cost && <Error>{errors.cost.message}</Error>}
      <Button label="Done" />
    </StyledForm>
  );
};

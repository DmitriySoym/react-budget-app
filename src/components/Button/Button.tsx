import { StyledButton } from "./style";

interface IProps {
  label: string;
}

export const Button = ({ label }: IProps) => {
  return <StyledButton type="submit">{label}</StyledButton>;
};

import { StyledButton } from "./style";

interface IProps {
  label: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ label, type }: IProps) => {
  return <StyledButton type={type}>{label}</StyledButton>;
};

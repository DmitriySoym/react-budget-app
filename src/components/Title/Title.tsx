import { StyledTitle } from "./style";

interface IProps {
  value: string;
}

export const Title = ({ value }: IProps) => {
  return <StyledTitle>{value}</StyledTitle>;
};

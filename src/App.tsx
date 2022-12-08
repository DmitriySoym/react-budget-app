import { StyledApp } from "./style";
import { Header, Form, Expenses } from "components";

export const App = () => {
  return (
    <StyledApp>
      <Header />
      <Expenses />
      <Form />
    </StyledApp>
  );
};

import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import { App } from "./App";
import { CurrencyContextProvider, BudgetContextProvider, ExpensesContextProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <BudgetContextProvider>
      <CurrencyContextProvider>
        <ExpensesContextProvider>
          <GlobalStyle />
          <App />
        </ExpensesContextProvider>
      </CurrencyContextProvider>
    </BudgetContextProvider>
  </>,
);

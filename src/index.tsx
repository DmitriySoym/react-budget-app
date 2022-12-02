import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import { App } from "./App";
import { CurrencyContexyProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <CurrencyContexyProvider>
      <App />
    </CurrencyContexyProvider>
  </>,
);

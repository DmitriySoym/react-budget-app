import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./GlobalStyle";
import { App } from "./App";
import { AppContextProvider } from "context";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <AppContextProvider>
      <GlobalStyle />
      <App />
    </AppContextProvider>
  </>,
);

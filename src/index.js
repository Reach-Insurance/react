import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { ConfirmContextProvider } from "./store/ConfirmContextProvider";
import ConfirmDialog from "./components/ConfirmDialog";
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ConfirmContextProvider>
      <ThemeProvider theme={theme}>
        <App />
        <ConfirmDialog />
      </ThemeProvider>
    </ConfirmContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

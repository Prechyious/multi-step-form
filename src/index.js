import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { FormProvider } from "./components/context/FormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <FormProvider>
                <App />
            </FormProvider>
        </BrowserRouter>
    </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import DarkProvider from "./Components/DarkContextApi";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </StrictMode>
);

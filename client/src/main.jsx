import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserProvider from "../provider/UserProvider";
import "./css/global.css";
import Index from "./screens/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Index />
    </UserProvider>
  </StrictMode>
);

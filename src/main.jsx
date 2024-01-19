import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";

import { dark, neobrutalism } from '@clerk/themes';
;



import "./index.css";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider appearance={{
      baseTheme: dark
    }} publishableKey={publishableKey}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            z
            <Route index element={<App />} />
          </Route>


        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
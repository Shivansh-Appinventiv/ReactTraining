import React from "react";
import { Suspense } from "react";
import App from "./app";
import "./i18next";

export default function TranslationApp() {
  return (
    <Suspense fallback={"loading"}>
      <App />
    </Suspense>
  );
}

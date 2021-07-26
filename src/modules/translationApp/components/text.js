import React from "react";
import { useTranslation } from "react-i18next";

export default function Text() {
  const { t } = useTranslation();
  return (
    <div className={`outerContainer`}>
      <h1>{t(`quotes.1`)}</h1>
      <h1>{t(`quotes.2`)}</h1>
      <h1>{t(`quotes.3`)}</h1>
      <h1>{t(`quotes.4`)}</h1>
    </div>
  );
}

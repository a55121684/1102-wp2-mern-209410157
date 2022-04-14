import React from "react";
import { useAppContext } from "../context/appContext_57";

export default function Alert_57() {
  const { alertText, alertType } = useAppContext();
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
}

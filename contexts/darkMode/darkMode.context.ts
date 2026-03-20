import { createContext } from "react";
import { DarkModeContextType } from "./darkMode.interface";

export const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

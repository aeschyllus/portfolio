import { Dispatch, SetStateAction } from "react";

export interface DarkModeContextType {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

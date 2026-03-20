"use client";

import { ReactNode, useMemo, useState } from "react";
import { DarkModeContext } from "./darkMode.context";

export const DarkModeProvider = ({
  children,
}: {
  readonly children: ReactNode;
}) => {
  const [dark, setDark] = useState(false);
  const context = useMemo(() => ({ dark, setDark }), [dark]);

  return (
    <DarkModeContext.Provider value={context}>
      {children}
    </DarkModeContext.Provider>
  );
};

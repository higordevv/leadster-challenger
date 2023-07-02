"use client";

import { createContext } from "react";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyle from "../styles/global";

const AppContext = createContext({});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppContext.Provider value={{}}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </AppContext.Provider>
  );
};

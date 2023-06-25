"use client";

import { createContext } from "react";
import { ThemeProvider } from "styled-components";
const AppContext = createContext({});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};

import React, { ReactNode } from "react";
import { AppProvider } from "./app/context";

export type Dispatch<T> = (action: T) => void;
export type ProviderProps = {
  children: ReactNode;
};

export const JulebProvider: React.FC<ProviderProps> = (
  props: ProviderProps
) => {
  return <AppProvider>{props.children}</AppProvider>;
};

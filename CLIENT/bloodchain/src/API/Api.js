import React from "react";

export const Content = React.createContext();

export function ContentProvider({ children }) {
  return <Content.Provider>{children}</Content.Provider>;
}

export default Content;

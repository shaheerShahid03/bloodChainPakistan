import React from "react";

const Protect = React.createContext(undefined);
const Handle = React.createContext(undefined);

export const Context = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleAuth = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  };

  return (
    <Protect.Provider value={isLoggedIn}>
      <Handle.Provider value={handleAuth}>{children}</Handle.Provider>
    </Protect.Provider>
  );
};

const useProtect = () => {
  const context = React.useContext(Protect);

  if (context === undefined) {
    throw Error("useUserContext must be inside UserProvider");
  }

  return context;
};

const useHandle = () => {
  const context = React.useContext(Handle);

  if (context === undefined) {
    throw Error("useUserContext must be inside UserProvider");
  }

  return context;
};

const useUserContext = () => {
  return [useProtect(), useHandle()];
};

export default Context;
export { useHandle, useProtect, useUserContext };

import { useState, createContext } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = (props) => {
  const [test, setTest] = useState("testing");

  const state = {
    test,
    setTest,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

import React from "react";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  let m = "salom";
  let simple = () => {
    console.log("salom");
  };
  return (
    <DataContext.Provider value={{ m, simple }}>
      {children}
    </DataContext.Provider>
  );
}

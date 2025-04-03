"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const GlobalContext = createContext(null);

// Create the provider component
export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  return (
    <GlobalContext.Provider
      value={{
        user, isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook for consuming the context
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

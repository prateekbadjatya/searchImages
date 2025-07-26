import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

   const [searchTerm, setSearchTerm] = useState('cat');

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle(
      "dark-theme",
      localStorage.getItem("theme") === "dark"
    );
  }, []);
  const handleOnChangeTheme = (value) => {
    localStorage.setItem("theme", value);
    setTheme(value);
    const body = document.querySelector("body");
    body.classList.toggle("dark-theme", value === "dark");
  };

  return (
    <AppContext.Provider value={{ theme, searchTerm, handleOnChangeTheme , setSearchTerm}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

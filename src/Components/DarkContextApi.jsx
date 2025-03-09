import { createContext, useContext, useState } from "react";

const DarkContext = createContext();

export const useDarkMode = () => useContext(DarkContext);

const DarkProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;

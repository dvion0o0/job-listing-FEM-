import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  const AddKeyword = (keyword) => {
    if (!filterKeyword.includes(keyword)) {
      setFilterKeyword([...filterKeyword, keyword]);
    }
  };

  const RemoveKeyword = (key) => {
    const newKeyword = filterKeyword.filter((item) => item !== key);
    setFilterKeyword(newKeyword);
  };

  const ClearKeywords = () => {
    setFilterKeyword([]);
  };

  return (
    <AppContext.Provider
      value={{
        filterKeyword,
        AddKeyword,
        RemoveKeyword,
        ClearKeywords,
        setFilterKeyword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;

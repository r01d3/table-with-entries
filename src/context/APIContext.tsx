import { createContext, useContext, useEffect, useState } from "react";
import {
  APIContextProviderType,
  APIContextType,
  DataType,
} from "../utils/types";
import { fetchData } from "../utils";

const APIContext = createContext({});

const APIContextProvider = ({ children }: APIContextProviderType) => {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchData(setData, setIsLoading);
  }, []);

  const APIContextValue = {
    data,
    isLoading,
    setData,
  };
  return (
    <APIContext.Provider value={APIContextValue}>
      {children}
    </APIContext.Provider>
  );
};

const useAPIContext = () => useContext(APIContext) as APIContextType;

export { useAPIContext, APIContextProvider };

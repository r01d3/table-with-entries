import { ReactNode } from "react";

type DataType = {
  id: string;
  username: string;
  fisrtName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  address: string;
  city: string;
  newsletter: string;
  country: string;
  phone: string;
  details: string;
  hobbies: string;
};

type APIContextType = {
  data: DataType[];
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  isLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type APIContextProviderType = {
  children: ReactNode;
};

export type { DataType, APIContextType, APIContextProviderType };

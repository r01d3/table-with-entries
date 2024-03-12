import { ReactNode } from "react";

type DataType = {
  id: string;
  username: string;
  fisrtName: string;
  lastName: string;
  gender: "male" | "female";
  dateOfBirth: string | string[];
  address: string;
  city: string;
  agreement: string;
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

type HeaderFormType = {
  title: string;
};

type eType = { target: { value: string } };

export type {
  DataType,
  APIContextType,
  APIContextProviderType,
  HeaderFormType,
  eType,
};

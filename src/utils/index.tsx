import { DataType } from "./types";

const BASE_URL = "http://localhost:3000/MOCK-DATA.json";

const fetchData = async (
  setData: React.Dispatch<React.SetStateAction<DataType[]>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  setData(data);
  setIsLoading(false);
};

export { fetchData };

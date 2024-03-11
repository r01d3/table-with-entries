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

const getUsernames = (data: DataType[]) => data.map((d) => d.username);
const usernameFiltersOptions = (users: string[]) =>
  [...new Set(users)].map((user: string) => {
    return {
      text: user,
      value: user,
    };
  });

const getGenders = (data: DataType[]) => data.map((d) => d.gender);
const genderFiltersOptions = (genders: string[]) =>
  [...new Set(genders)].map((gender: string) => {
    return {
      text: gender,
      value: gender,
    };
  });
const getCities = (data: DataType[]) => data.map((c) => c.city);
const cityFiltersOptions = (cities: string[]) =>
  [...new Set(cities)].map((city: string) => {
    return {
      text: city,
      value: city,
    };
  });

const getContries = (data: DataType[]) => data.map((c) => c.country);
const countryFiltersOptions = (countries: string[]) =>
  [...new Set(countries)].map((country: string) => {
    return {
      text: country,
      value: country,
    };
  });

const getPhones = (data: DataType[]) => data.map((c) => c.phone);
const phoneFiltersOptions = (phones: string[]) =>
  phones.map((phone: string) => {
    return {
      text: phone,
      value: phone,
    };
  });
const getHobbies = (data: DataType[]) => data.map((c) => c.hobbies);
const hobbiesFiltersOptions = (hobbies: string[]) =>
  [...new Set(hobbies)]
    .filter((item) => item !== "")
    .map((hobby: string) => {
      return {
        text: hobby,
        value: hobby,
      };
    });

export {
  fetchData,
  getUsernames,
  usernameFiltersOptions,
  getCities,
  cityFiltersOptions,
  getContries,
  countryFiltersOptions,
  getPhones,
  phoneFiltersOptions,
  getHobbies,
  hobbiesFiltersOptions,
  getGenders,
  genderFiltersOptions,
};

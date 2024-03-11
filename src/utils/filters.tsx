import { DataType } from "./types";
import {
  cityFiltersOptions,
  countryFiltersOptions,
  getCities,
  getContries,
  getHobbies,
  getPhones,
  getUsernames,
  hobbiesFiltersOptions,
  phoneFiltersOptions,
  usernameFiltersOptions,
  getGenders,
  genderFiltersOptions,
} from "./index";

const getUsernameFiltersOptionsValue = (data: DataType[]) =>
  usernameFiltersOptions(getUsernames(data));

const getGenderFiltersOptionsValue = (data: DataType[]) =>
  genderFiltersOptions(getGenders(data));

const getCityFiltersOptionsValue = (data: DataType[]) =>
  cityFiltersOptions(getCities(data));
const getCountryFiltersOptionsValue = (data: DataType[]) =>
  countryFiltersOptions(getContries(data));
const getPhoneFiltersOptionsValue = (data: DataType[]) =>
  phoneFiltersOptions(getPhones(data));
const getHobbiesFiltersOptionsValue = (data: DataType[]) =>
  hobbiesFiltersOptions(getHobbies(data));

export {
  getUsernameFiltersOptionsValue,
  getGenderFiltersOptionsValue,
  getCityFiltersOptionsValue,
  getCountryFiltersOptionsValue,
  getPhoneFiltersOptionsValue,
  getHobbiesFiltersOptionsValue,
};

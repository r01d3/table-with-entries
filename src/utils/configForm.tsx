import { DataType } from "./types";
import { namePattern, phonePattern, usernamePattern } from "./validations";

const initalEntry: DataType = {
  id: "",
  username: "",
  fisrtName: "",
  lastName: "",
  gender: "male",
  dateOfBirth: "",
  address: "",
  city: "",
  agreement: "No",
  country: "",
  phone: "",
  details: "",
  hobbies: "",
};

const configForm = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
  initialValues: {
    remember: true,
  },
};

const getUsernameFieldRules = [
  {
    required: true,
    message: "Please insert your username!",
  },
  { whitespace: true },
  { min: 4, max: 80 },
  {
    pattern: usernamePattern,
    message: "Username should be match with 'a-zA-z0-9!@#' ",
  },
];

const getFirstNameFieldRules = [
  {
    required: true,
    message: "Please insert your firstName!",
  },
  { whitespace: true },
  { min: 2, max: 80 },
  {
    pattern: namePattern,
    message: "FirstName should contains lowercase/uppercase letters",
  },
];

const getLastNameFieldRules = [
  {
    required: true,
    message: "Please insert your lastName!",
  },
  { whitespace: true },
  { min: 2, max: 80 },
  {
    pattern: namePattern,
    message: "LastName should contains lowercase/uppercase letters",
  },
];

const getDateOfBirthFieldRules = {
  type: "object",
  required: true,
  message: "Please select a date",
};

const getPhoneFieldRules = [
  {
    pattern: phonePattern,
    message: "Phone add a valid phone number",
  },
];

export {
  initalEntry,
  configForm,
  getUsernameFieldRules,
  getFirstNameFieldRules,
  getLastNameFieldRules,
  getDateOfBirthFieldRules,
  getPhoneFieldRules,
};

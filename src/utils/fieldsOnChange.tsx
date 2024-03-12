import { DataType } from "./types";

const maleOnChange = (
  checked: boolean,
  setMale: React.Dispatch<React.SetStateAction<boolean>>,
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setMale(checked);
  if (checked) {
    setNewEntry({
      ...newEntry,
      gender: "male",
    });
  }
};
const femaleOnChange = (
  checked: boolean,
  setFemale: React.Dispatch<React.SetStateAction<boolean>>,
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setFemale(checked);
  if (checked) {
    setNewEntry({
      ...newEntry,
      gender: "female",
    });
  }
};

const usernameOnChange = (
  e: { target: { value: string } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({
    ...newEntry,
    username: e.target.value,
    id: Math.floor(Math.random() * 100).toString(),
  });
};
const firstNameOnChange = (
  e: { target: { value: string } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, fisrtName: e.target.value });
};
const lastNameOnChange = (
  e: { target: { value: string } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, lastName: e.target.value });
};

const datePickerOnChange = (
  _: object,
  dateString: string | string[],
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, dateOfBirth: dateString.toString() });
};
const agreementOnChnage = (
  e: { target: { checked: boolean } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({
    ...newEntry,
    agreement: e.target.checked ? "Yes" : "No",
  });
};
const adressOnChange = (
  e: {
    target: { value: string };
  },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, address: e.target.value });
};
const cityOnChange = (
  e: { target: { value: string } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, city: e.target.value });
};

const countryOnChange = (
  value: string,
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, country: value });
};

const phoneOnChange = (
  e: { target: { value: string } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, phone: e.target.value });
};
const detalisOnChange = (
  e: { target: { value: string } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, details: e.target.value });
};
const hobbiesOnChange = (
  e: { target: { value: string } },
  setNewEntry: React.Dispatch<React.SetStateAction<DataType>>,
  newEntry: DataType
) => {
  setNewEntry({ ...newEntry, hobbies: e.target.value });
};

export {
  maleOnChange,
  femaleOnChange,
  usernameOnChange,
  firstNameOnChange,
  lastNameOnChange,
  datePickerOnChange,
  adressOnChange,
  cityOnChange,
  phoneOnChange,
  detalisOnChange,
  countryOnChange,
  agreementOnChnage,
  hobbiesOnChange,
};

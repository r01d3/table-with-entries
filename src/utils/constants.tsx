import moment from "moment";
import { Dayjs } from "dayjs";
import { DataType } from "./types";

const disabledDate = (currentDate: Dayjs): boolean => {
  const today = moment();
  const eighteenYearsAgo = moment().subtract(18, "years");
  return currentDate && (currentDate > today || currentDate > eighteenYearsAgo);
};

const isSubmitBtnDisabled = (newEntry: DataType) =>
  newEntry.fisrtName &&
  newEntry.lastName &&
  newEntry.username &&
  newEntry.dateOfBirth
    ? false
    : true;

const countryOptions = [
  {
    value: "Romania",
    label: "Romania",
  },
  {
    value: "Spain",
    label: "Spain",
  },
  {
    value: "USA",
    label: "USA",
  },
];

const homePageText = {
  title: "Entries",
  addNewEntryBtn: "Add new entry",
  table: {
    actions: {
      edit: "Edit",
      delete: "Delete",
    },
  },
};

const customFormText = {
  title: {
    add: "Add new Entry",
    edit: "Edit entry ",
  },
  label: {
    username: "Username",
    firstName: "FirstName",
    lastName: "LastName",
    gender: "Gender",
    dateOfBirth: "Date of Birth",
    address: "Address",
    city: "City",
    agreement: "Agree to receive news about our table product!",
    country: "Country",
    phone: "Phone",
    details: "Details",
    hobbies: "Hobbies",
  },
  buttonsText: {
    submit: "Submit",
    cancel: "Cancel",
  },
  placeholder: {
    select: "Select one country",
  },
  genders: {
    male: "Male",
    female: "Femele",
  },
};
export {
  countryOptions,
  disabledDate,
  isSubmitBtnDisabled,
  homePageText,
  customFormText,
};

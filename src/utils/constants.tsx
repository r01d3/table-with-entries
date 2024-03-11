import moment from "moment";
import { Dayjs } from "dayjs";

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

const disabledDate = (currentDate: Dayjs): boolean => {
  const today = moment();
  const eighteenYearsAgo = moment().subtract(18, "years");
  return currentDate && (currentDate > today || currentDate > eighteenYearsAgo);
};

export { countryOptions, disabledDate };

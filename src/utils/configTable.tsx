import { ColumnsType } from "antd/es/table";

import { DataType } from "./types";

const getColumns = () => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Index",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
    {
      title: "Newsletter",
      dataIndex: "newsletter",
      key: "newsletter",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Hobbies",
      dataIndex: "hobbies",
      key: "hobbies",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
    },
  ];
  return columns;
};

export { getColumns };

import { Popconfirm } from "antd";
import { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
import { DataType } from "./types";
import {
  getCityFiltersOptionsValue,
  getCountryFiltersOptionsValue,
  getGenderFiltersOptionsValue,
  getHobbiesFiltersOptionsValue,
  getPhoneFiltersOptionsValue,
  getUsernameFiltersOptionsValue,
} from "./filters";

const handleDelete = (
  id: string,
  data: DataType[],
  setData: React.Dispatch<React.SetStateAction<DataType[]>>
) => {
  const newData = data.filter((item) => item.id !== id);
  setData(newData);
};
const getColumns = (
  data: DataType[],
  setData: React.Dispatch<React.SetStateAction<DataType[]>>
) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Index",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      filters: getUsernameFiltersOptionsValue(data),
      onFilter: (value, record) => record.username.includes(value.toString()),
      filterSearch: true,
      sorter: (a, b) => a.username.localeCompare(b.username),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      filters: getGenderFiltersOptionsValue(data),
      onFilter: (value, record) => record.gender.includes(value.toString()),
      filterSearch: true,
      sorter: (a, b) => a.gender?.localeCompare(b.gender),
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      sorter: (a, b) =>
        a.dateOfBirth.toString().localeCompare(b.dateOfBirth.toString()),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      filters: getCityFiltersOptionsValue(data),
      onFilter: (value, record) => record.city.includes(value.toString()),
      filterSearch: true,
      sorter: (a, b) => a.city.localeCompare(b.city),
    },
    {
      title: "Agreement",
      dataIndex: "agreement",
      key: "agreement",
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      filters: getCountryFiltersOptionsValue(data),
      onFilter: (value, record) => record.country.includes(value.toString()),
      filterSearch: true,
      sorter: (a, b) => a.country.localeCompare(b.country),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      filters: getPhoneFiltersOptionsValue(data),
      onFilter: (value, record) => record.phone.includes(value.toString()),
      filterSearch: true,
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: "Hobbies",
      dataIndex: "hobbies",
      key: "hobbies",
      filters: getHobbiesFiltersOptionsValue(data),
      onFilter: (value, record) => record.hobbies.includes(value.toString()),
      filterSearch: true,
      sorter: (a, b) => a.hobbies.localeCompare(b.hobbies),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Link to={`/edit/${record.id}`}>Edit</Link>
          <span style={{ margin: "0 8px" }}>|</span>
          {data.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.id, data, setData)}
            >
              <a>Delete</a>
            </Popconfirm>
          ) : null}
        </span>
      ),
    },
  ];
  return columns;
};

export { getColumns };

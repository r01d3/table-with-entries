import React from "react";
import { Table as AntTable } from "antd";
import { DataType } from "../utils/types";
import { useAPIContext } from "../context/APIContext";
import { getColumns } from "../utils/configTable";

const Table: React.FC = () => {
  const { data, setData } = useAPIContext();
  return (
    <AntTable<DataType>
      columns={getColumns(data, setData)}
      dataSource={data}
      rowKey={(record) => record.username}
      pagination={{ pageSize: 10 }}
      onChange={(filters) => filters}
      bordered
    />
  );
};

export default Table;

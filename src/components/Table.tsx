import { Table as AntTable } from "antd";
import { DataType, TableType } from "../utils/types";
import { useAPIContext } from "../context/APIContext";
import { getColumns } from "../utils/configTable";

const Table: React.FC<TableType> = ({ className }: TableType) => {
  const { data } = useAPIContext();
  return (
    <AntTable<DataType>
      columns={getColumns()}
      dataSource={data}
      rowKey={(record) => record.username}
      pagination={{ pageSize: 10 }}
      onChange={(filters) => filters}
      bordered
      className={className}
    />
  );
};

export default Table;

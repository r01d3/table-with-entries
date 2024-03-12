import { Typography } from "antd";

const TitleLevel2: React.FC<string> = (title: string) => {
  return <Typography.Title level={2}>{title}</Typography.Title>;
};

export default TitleLevel2;

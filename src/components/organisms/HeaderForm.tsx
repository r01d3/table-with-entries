import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Typography } from "antd";
import { HeaderFormType } from "../../utils/types";

const HeaderForm: React.FC<HeaderFormType> = ({ title }: HeaderFormType) => {
  const navigator = useNavigate();
  const onCancel = () => {
    navigator("/");
  };
  return (
    <Flex justify="space-evenly" className="new-entry-header">
      <Typography.Title level={2}>{title}</Typography.Title>
      <Button type="default" onClick={onCancel}>
        Cancel
      </Button>
    </Flex>
  );
};

export default HeaderForm;

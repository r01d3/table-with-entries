import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Typography } from "antd";
import { HeaderFormType } from "../../utils/types";
import "./HeaderForm.scss";
import { customFormText } from "../../utils/constants";

const HeaderForm: React.FC<HeaderFormType> = ({ title }: HeaderFormType) => {
  const navigator = useNavigate();
  const onCancel = () => {
    navigator("/");
  };
  return (
    <Flex justify="space-around" className="new-entry-header">
      <Typography.Title level={2}>{title}</Typography.Title>
      <Button type="default" onClick={onCancel}>
        {customFormText.buttonsText.cancel}
      </Button>
    </Flex>
  );
};

export default HeaderForm;

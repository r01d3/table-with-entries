import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
  Switch,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import { useAPIContext } from "../../context/APIContext";
import { DataType, eType } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import {
  countryOptions,
  customFormText,
  disabledDate,
  isSubmitBtnDisabled,
} from "../../utils/constants";
import {
  configForm,
  getFirstNameFieldRules,
  getLastNameFieldRules,
  getPhoneFieldRules,
  getUsernameFieldRules,
  initalEntry,
} from "../../utils/configForm";

import {
  maleOnChange,
  femaleOnChange,
  usernameOnChange,
  firstNameOnChange,
  lastNameOnChange,
  adressOnChange,
  cityOnChange,
  agreementOnChnage,
  phoneOnChange,
  detalisOnChange,
  hobbiesOnChange,
  countryOnChange,
  datePickerOnChange,
} from "../../utils/fieldsOnChange";
import { HeaderForm } from ".";

const CustomForm: React.FC = () => {
  const { data, setData } = useAPIContext();
  const navigator = useNavigate();

  const [newEntry, setNewEntry] = useState<DataType>(initalEntry);

  const [male, setMale] = useState<boolean>(false);
  const [female, setFemale] = useState<boolean>(false);

  const onFinish = () => {
    setData([...data, newEntry]);
    navigator("/");
  };

  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  const onCancel = () => {
    navigator("/");
  };

  return (
    <>
      <HeaderForm title={customFormText.title.add} />
      <Form
        name="basic"
        {...configForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label={customFormText.label.username}
          name="username"
          rules={getUsernameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e: eType) => usernameOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>

        <Form.Item
          label={customFormText.label.firstName}
          name="firstName"
          rules={getFirstNameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e: eType) => firstNameOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item
          label={customFormText.label.lastName}
          name="lastName"
          rules={getLastNameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e: eType) => lastNameOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>

        <Form.Item label={customFormText.label.gender}>
          <Space>
            {customFormText.genders.male}
            <Switch
              onChange={(event: boolean) =>
                maleOnChange(event, setMale, setNewEntry, newEntry)
              }
              disabled={female}
            />
            {customFormText.genders.female}
            <Switch
              onChange={(event: boolean) =>
                femaleOnChange(event, setFemale, setNewEntry, newEntry)
              }
              disabled={male}
            />
          </Space>
        </Form.Item>

        <Form.Item
          label={customFormText.label.dateOfBirth}
          rules={[
            { type: "object", required: true, message: "Please select a date" },
          ]}
          hasFeedback
        >
          <DatePicker
            onChange={(_: object, dataString: string | string[]) =>
              datePickerOnChange(_, dataString, setNewEntry, newEntry)
            }
            format="YYYY-MM-DD"
            allowClear={false}
            disabledDate={disabledDate}
          />
        </Form.Item>

        <Form.Item label={customFormText.label.address} name="address">
          <Input
            onChange={(e: eType) => adressOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item label={customFormText.label.city} name="city">
          <Input
            onChange={(e: eType) => cityOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="unchecked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox
            onChange={(e) => agreementOnChnage(e, setNewEntry, newEntry)}
          >
            {customFormText.label.agreement}
          </Checkbox>
        </Form.Item>
        <Form.Item label={customFormText.label.country} name="country">
          <Select
            placeholder={customFormText.placeholder.select}
            onChange={(value: string) =>
              countryOnChange(value, setNewEntry, newEntry)
            }
            optionLabelProp="label"
            options={countryOptions}
            optionRender={(option) => <Space>{option.data.value}</Space>}
          />
        </Form.Item>
        <Form.Item
          label={customFormText.label.phone}
          name="phone"
          hasFeedback
          rules={getPhoneFieldRules}
        >
          <Input
            onChange={(e: eType) => phoneOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item label={customFormText.label.details} name="details">
          <TextArea
            onChange={(e: eType) => detalisOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item label={customFormText.label.hobbies} name="hobbies">
          <TextArea
            onChange={(e: eType) => hobbiesOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Space>
            <Button
              type="primary"
              htmlType="submit"
              disabled={isSubmitBtnDisabled(newEntry)}
            >
              {customFormText.buttonsText.submit}
            </Button>
            <Button type="default" onClick={onCancel}>
              {customFormText.buttonsText.cancel}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomForm;

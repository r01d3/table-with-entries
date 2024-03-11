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
import { DataType } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { countryOptions, disabledDate } from "../../utils/constants";
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

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

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
      <HeaderForm />
      <Form
        className="new-entry"
        name="basic"
        {...configForm}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={getUsernameFieldRules}
          hasFeedback
        >
          <Input onChange={(e) => usernameOnChange(e, setNewEntry, newEntry)} />
        </Form.Item>

        <Form.Item
          label="FristName"
          name="firstName"
          rules={getFirstNameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e) => firstNameOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item
          label="LastName"
          name="lastName"
          rules={getLastNameFieldRules}
          hasFeedback
        >
          <Input onChange={(e) => lastNameOnChange(e, setNewEntry, newEntry)} />
        </Form.Item>

        <Form.Item label="Gender">
          Male
          <Switch
            onChange={(e) => maleOnChange(e, setMale, setNewEntry, newEntry)}
            disabled={female}
          />
          Female{" "}
          <Switch
            onChange={(e) =>
              femaleOnChange(e, setFemale, setNewEntry, newEntry)
            }
            disabled={male}
          />
        </Form.Item>

        <Form.Item
          label="Date of birth"
          rules={[
            { type: "object", required: true, message: "Please select a date" },
          ]}
          hasFeedback
        >
          <DatePicker
            onChange={(_: object, dataString: string) =>
              datePickerOnChange(_, dataString, setNewEntry, newEntry)
            }
            format="YYYY-MM-DD"
            allowClear={false}
            disabledDate={disabledDate}
          />
        </Form.Item>

        <Form.Item label="Address" name="address">
          <Input onChange={(e) => adressOnChange(e, setNewEntry, newEntry)} />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input onChange={(e) => cityOnChange(e, setNewEntry, newEntry)} />
        </Form.Item>
        <Form.Item
          name="agrrement"
          valuePropName="unchecked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox
            onChange={(e) => agreementOnChnage(e, setNewEntry, newEntry)}
          >
            Agrrement
          </Checkbox>
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Select
            style={{
              width: "45%",
            }}
            placeholder="select one country"
            onChange={(e) => countryOnChange(e, setNewEntry, newEntry)}
            optionLabelProp="label"
            options={countryOptions}
            optionRender={(option) => <Space>{option.data.value}</Space>}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          hasFeedback
          rules={getPhoneFieldRules}
        >
          <Input onChange={(e) => phoneOnChange(e, setNewEntry, newEntry)} />
        </Form.Item>
        <Form.Item label="Details" name="details">
          <TextArea
            onChange={(e) => detalisOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item label="Hobbies" name="hobbies">
          <TextArea
            onChange={(e) => hobbiesOnChange(e, setNewEntry, newEntry)}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Space>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="default" onClick={onCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
      ;
    </>
  );
};

export default CustomForm;

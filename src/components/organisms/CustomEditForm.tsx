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
import dayjs from "dayjs";
import { useState } from "react";
import { useAPIContext } from "../../context/APIContext";
import { DataType } from "../../utils/types";
import { useNavigate, useParams } from "react-router-dom";
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

const CustomEditForm: React.FC = () => {
  const { data, setData } = useAPIContext();
  const { id } = useParams();
  const navigator = useNavigate();

  const getEntryforEdit = data.filter((d) => d.id === id);
  const initalEntry = getEntryforEdit[0];
  const [updateEntry, setUpadateEntry] = useState<DataType>(initalEntry);

  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const onFinish = (_: DataType) => {
    const updateData = data.filter((d) => d.id !== initalEntry.id);
    setData([...updateData, updateEntry]);
    navigator("/");
  };
  const onFinishFailed = (errorInfo: object) => {
    console.log("Failed:", errorInfo);
  };

  const onCancel = () => {
    navigator("/");
  };
  return (
    <div>
      <HeaderForm title={customFormText.title.edit + id} />
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
          initialValue={updateEntry?.username}
          rules={getUsernameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e) => usernameOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>

        <Form.Item
          label={customFormText.label.firstName}
          name="firstName"
          initialValue={updateEntry?.fisrtName}
          rules={getFirstNameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e) => firstNameOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>
        <Form.Item
          label={customFormText.label.lastName}
          name="lastName"
          initialValue={updateEntry?.lastName}
          rules={getLastNameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e) => lastNameOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>

        <Form.Item label="Gender" initialValue={updateEntry?.gender}>
          <Space>
            {customFormText.genders.male}
            <Switch
              onChange={(e) =>
                maleOnChange(e, setMale, setUpadateEntry, updateEntry)
              }
              disabled={female}
              defaultValue={initalEntry?.gender === "male"}
            />
            {customFormText.genders.female}
            <Switch
              onChange={(e) =>
                femaleOnChange(e, setFemale, setUpadateEntry, updateEntry)
              }
              disabled={male}
              defaultValue={initalEntry?.gender === "female"}
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
            required
            onChange={(_: object, dataString: string) =>
              datePickerOnChange(_, dataString, setUpadateEntry, updateEntry)
            }
            format="YYYY-MM-DD"
            defaultValue={dayjs(updateEntry?.dateOfBirth)}
            disabledDate={disabledDate}
          />
        </Form.Item>

        <Form.Item
          label={customFormText.label.address}
          name="address"
          initialValue={updateEntry?.address}
        >
          <Input
            onChange={(e) => adressOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>
        <Form.Item
          label={customFormText.label.city}
          name="city"
          initialValue={updateEntry?.city}
        >
          <Input
            onChange={(e) => cityOnChange(e, setUpadateEntry, updateEntry)}
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
            onChange={(e) => agreementOnChnage(e, setUpadateEntry, updateEntry)}
            defaultChecked={updateEntry?.agreement === "Yes" ? true : false}
            style={{ width: "100%" }}
          >
            {customFormText.label.agreement}
          </Checkbox>
        </Form.Item>
        <Form.Item
          label={customFormText.label.country}
          name="country"
          initialValue={updateEntry?.country}
        >
          <Select
            placeholder={customFormText.placeholder.select}
            onChange={(value: string) =>
              countryOnChange(value, setUpadateEntry, updateEntry)
            }
            optionLabelProp="label"
            options={countryOptions}
            optionRender={(option) => <Space>{option.data.value}</Space>}
          />
        </Form.Item>
        <Form.Item
          label={customFormText.label.phone}
          name="phone"
          initialValue={updateEntry?.phone}
          rules={getPhoneFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e) => phoneOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>
        <Form.Item
          label={customFormText.label.details}
          name="details"
          initialValue={updateEntry?.details}
        >
          <TextArea
            onChange={(e) => detalisOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>
        <Form.Item
          label={customFormText.label.hobbies}
          name="hobbies"
          initialValue={updateEntry?.hobbies}
        >
          <TextArea
            onChange={(e) => hobbiesOnChange(e, setUpadateEntry, updateEntry)}
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
              disabled={isSubmitBtnDisabled(updateEntry)}
            >
              {customFormText.buttonsText.submit}
            </Button>
            <Button type="default" onClick={onCancel}>
              {customFormText.buttonsText.cancel}
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomEditForm;

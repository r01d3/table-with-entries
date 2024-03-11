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
import { countryOptions, disabledDate } from "../../utils/constants";
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
      <HeaderForm title="Edit entry" />
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
          initialValue={updateEntry?.username}
          rules={getUsernameFieldRules}
          hasFeedback
        >
          <Input
            onChange={(e) => usernameOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>

        <Form.Item
          label="FristName"
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
          label="LastName"
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
          Male
          <Switch
            onChange={(e) =>
              maleOnChange(e, setMale, setUpadateEntry, updateEntry)
            }
            disabled={female}
            defaultValue={initalEntry?.gender === "male"}
          />
          Female
          <Switch
            onChange={(e) =>
              femaleOnChange(e, setFemale, setUpadateEntry, updateEntry)
            }
            disabled={male}
            defaultValue={initalEntry?.gender === "female"}
          />
        </Form.Item>

        <Form.Item label="Date of birth">
          <DatePicker
            onChange={(_: object, dataString: string) =>
              datePickerOnChange(_, dataString, setUpadateEntry, updateEntry)
            }
            format="YYYY-MM-DD"
            defaultValue={dayjs(updateEntry?.dateOfBirth)}
            disabledDate={disabledDate}
          />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          initialValue={updateEntry?.address}
        >
          <Input
            onChange={(e) => adressOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>
        <Form.Item label="City" name="city" initialValue={updateEntry?.city}>
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
          >
            Agreement
          </Checkbox>
        </Form.Item>
        <Form.Item
          label="Country"
          name="country"
          initialValue={updateEntry?.country}
        >
          <Select
            style={{
              width: "45%",
            }}
            placeholder="select one country"
            defaultValue="Select your contry"
            onChange={(value: string) =>
              countryOnChange(value, setUpadateEntry, updateEntry)
            }
            optionLabelProp="label"
            options={countryOptions}
            optionRender={(option) => <Space>{option.data.value}</Space>}
          />
        </Form.Item>
        <Form.Item
          label="Phone"
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
          label="Details"
          name="details"
          initialValue={updateEntry?.details}
        >
          <TextArea
            onChange={(e) => detalisOnChange(e, setUpadateEntry, updateEntry)}
          />
        </Form.Item>
        <Form.Item
          label="Hobbies"
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
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button type="default" onClick={onCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CustomEditForm;

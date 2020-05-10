import React from 'react';
import { Form, Input, Select, AutoComplete } from 'antd';
import NumberFormat from 'react-number-format';
import styles from './AddClientForm.css';
import ConfigLogic from '../../../logic/uilogic/ConfigLogic';

export default class AddClientForm extends React.Component {
  constructor() {
    super();
    const [result, setResult] = useState([]);
  }

  render() {
    const [result, setResult] = useState([]);

    const layout = {
      labelCol: {
        span: 5
      },
      wrapperCol: {
        span: 18
      }
    };

    const { Option } = Select;

    const countysMap = ConfigLogic.getCountrys();
    const countrys = countysMap.map(c => (
      <Option key={c.value}>{c.text}</Option>
    ));

    const currencyMap = ConfigLogic.getTypeCurrency();
    const currency = currencyMap.map(q => (
      <Option key={q.value}>{q.text}</Option>
    ));

    const handleSearch = value => {
      let res = [];

      if (!value || value.indexOf('@') >= 0) {
        res = [];
      } else {
        res = ['gmail.com', '163.com', 'qq.com'].map(
          domain => `${value}@${domain}`
        );
      }

      setResult(res);
    };

    const children = result.map(email => (
      <Option key={email} value={email}>
        {email}
      </Option>
    ));

    return (
      <Form {...layout} name="basic">
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Company" name="company">
          <AutoComplete
            style={{
              width: 200
            }}
            onSearch={handleSearch}
            placeholder="input here"
          >
            {children}
          </AutoComplete>
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Select>{countrys}</Select>
        </Form.Item>
        <Form.Item label="Phone number" name="number">
          <NumberFormat
            className={styles.phone}
            format="+7 (###) ###-####"
            mask="_"
          />
        </Form.Item>
        <Form.Item label="Currency" name="Currency">
          <Select>{currency}</Select>
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
      </Form>
    );
  }
}

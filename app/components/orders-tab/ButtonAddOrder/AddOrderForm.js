import React from 'react';
import { Form, Checkbox, Input, Button, Select, InputNumber } from 'antd';
import AddOrderModal from './AddOrderModal';
import styles from './AddOrderForm.css';
import ConfigLogic from '../../../logic/uilogic/ConfigLogic';

export default class AddOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      intermediateCostItem: 1,
      intermediateNumberOfItems: 1,
      total: 0
    };
  }

  test = () => {
    this.state.total =
      this.state.intermediateCostItem * this.state.intermediateNumberOfItems;
    this.render();
  };

  render() {
    const layout = {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 18
      }
    };
    const tailLayout = {
      wrapperCol: {
        offset: 4,
        span: 18
      }
    };

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    // todo rewrite to redux
    // Calc total
    // const intermediateCostItem = 0;
    // const intermediateNumberOfItems = 0;
    // const total = 0;
    const onCostChange = newValue => {
      console.log(this.state.total);
      this.state.intermediateCostItem = parseInt(newValue || 0, 10);
      this.state.total =
        this.state.intermediateCostItem * this.state.intermediateNumberOfItems;
      console.log(this.state.total);
      this.render();
    };
    const onNumberOfItemsChange = newValue => {
      console.log(this.state.total);
      this.state.intermediateNumberOfItems = parseInt(newValue || 0, 10);
      this.state.total =
        this.state.intermediateCostItem * this.state.intermediateNumberOfItems;
      this.render();
    };

    const { Option } = Select;

    // Load types items
    const typesMap = ConfigLogic.getTypeItems();

    // Load types currency
    const currencyMap = ConfigLogic.getTypeCurrency();

    const types = typesMap.map(t => <Option key={t.value}>{t.text}</Option>);
    const currency = currencyMap.map(c => (
      <Option key={c.value}>{c.text}</Option>
    ));

    // ConfigLogic.getLang();
    const langsMap = ConfigLogic.getLang();
    const langs = langsMap.map(l => <Option key={l.value}>{l.text}</Option>);

    return (
      <Form
        {...layout}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label="Summary" name="summary">
          <Input />
        </Form.Item>

        <Form.Item label="Client" name="client">
          <Select>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              Disabled
            </Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Translete" name="translete">
          <Select className={styles.before}>{langs}</Select>
          <p className={styles.to}>to</p>
          <Select className={styles.after}>{langs}</Select>
        </Form.Item>
        <Form.Item label="Type items" name="type">
          <Select>{types}</Select>
        </Form.Item>
        <Form.Item label="Count items" name="count">
          <InputNumber
            style={{ width: '100%' }}
            onChange={onNumberOfItemsChange}
          />
        </Form.Item>
        <Form.Item className="currency" label="Cost for item" name="oc">
          <InputNumber
            className={styles.currency}
            style={{
              width: '400px',
              display: 'inline-block',
              'margin-right': '12px'
            }}
            onChange={this.test}  
          />
          <Select style={{ width: '226px', display: 'inline-block' }}>
            {currency}
          </Select>
        </Form.Item>
        <Form.Item label="Total cost" name="total">
          {this.state.total}
        </Form.Item>
      </Form>
    );
  }
}

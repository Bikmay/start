import React from 'react';
import { Form, Checkbox, Input, Button, Select, InputNumber } from 'antd';
import connect from 'react-redux';
import { bindActionCreators } from 'redux';
import AddOrderModal from './AddOrderModal';
import styles from './AddOrderForm.css';
import ConfigLogic from '../../../logic/uilogic/ConfigLogic';

import * as Calc from '../../../actions/calc';

export default class AddOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0 };
  }

  calculationOrderTotal() {
    const sum = this.count * this.cost;
    this.setState({ total: sum });
  }

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

    const { calculationOrderTotal } = this.props;
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
            ref={ref => {
              this.count = ref;
            }}
            style={{ width: '100%' }}
            onChange={this.calcOrderTotal}
          />
        </Form.Item>
        <Form.Item className="currency" label="Cost for item" name="oc">
          <InputNumber
            ref={ref => {
              this.cost = ref;
            }}
            className={styles.currency}
            style={{
              width: '400px',
              display: 'inline-block',
              'margin-right': '12px'
            }}
            onChange={this.calcOrderTotal}
          />
          <Select style={{ width: '226px', display: 'inline-block' }}>
            {currency}
          </Select>
        </Form.Item>
        <Form.Item label="Total cost" name="total">
          <p>{this.state.total}</p>
        </Form.Item>
      </Form>
    );
  }
}

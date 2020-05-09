// @flow
import React, { Component } from 'react';
import { Button, Select } from 'antd';
import TableComponent from '../components/orders-tab/Table';
import styles from './styles/OrdersPage.css';
import UILogic from '../components/UILogic';
import AddOrderModal from '../components/orders-tab/ButtonAddOrder/AddOrderModal';

type Props = {};

export default class OrdersPage extends Component<Props> {
  props: Props;

  render() {
    const { Option } = Select;
    return (
      <div>
        <div className={styles.headDiv}>
          <h1 className={styles.header}>Orders</h1>
        </div>
        <AddOrderModal />
        <TableComponent />
        <p>sd</p>
        <Select
          className="test"
          defaultValue="lucy"
          style={{ width: 120 }}
          listHeight={333}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled">job</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </div>
    );
  }
}

// @flow
import React, { Component } from 'react';
import { Button } from 'antd';
import TableComponent from '../components/orders-tab/Table';
import Test from '../components/Test';
import styles from './styles/OrdersPage.css';

type Props = {};

export default class OrdersPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.headDiv}>
          <h1 className={styles.header}>Orders</h1>
          <Button className={styles.addOrder} type="primary">
            Add order
          </Button>
        </div>
        <TableComponent />
        <p>sd</p>
      </div>
    );
  }
}

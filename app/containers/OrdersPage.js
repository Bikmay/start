// @flow
import React, { Component } from 'react';
import TableComponent from '../components/orders-tab/Table';
import styles from './styles/OrdersPage.css';
import AddOrderModal from '../components/orders-tab/ButtonAddOrder/AddOrderModal';

type Props = {};

export default class OrdersPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.headDiv}>
          <h1 className={styles.header}>Orders</h1>
        </div>
        <AddOrderModal />
        <TableComponent />
      </div>
    );
  }
}

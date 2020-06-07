// @flow
import React, { Component } from 'react';
import TableComponent from '../components/orders-tab/Table';
import styles from './styles/OrdersPage.css';
import AddOrderModal from '../components/orders-tab/ButtonAddOrder/AddOrderModal';
import OrderDrawer from '../components/orders-tab/Drawer/Drawer';

type Props = {};

export default class OrdersPage extends Component<Props> {
  props: Props;

  constructor() {
    super();
    this.state = {
      visibleDrawer: false
    };
    this.value = false;
    this.moveDrawer = this.moveDrawer.bind(this);
  }

  moveDrawer(value) {
    this.setState({ visibleDrawer: value });
  }

  render() {
    return (
      <div>
        <div className={styles.headDiv}>
          <h1 className={styles.header}>Orders</h1>
        </div>
        <AddOrderModal />
        <TableComponent onChangeDrawer={this.moveDrawer} />
        <OrderDrawer
          visible={this.state.visibleDrawer}
          onChangeDrawer={this.moveDrawer}
        />
      </div>
    );
  }
}

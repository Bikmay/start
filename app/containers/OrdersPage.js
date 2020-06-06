import React, { Component } from 'react';
import TableComponent from '../components/orders-tab/Table';
import styles from './styles/OrdersPage.css';
import AddOrderModal from '../components/orders-tab/ButtonAddOrder/AddOrderModal';
import OrderDrawer from '../components/orders-tab/DrawerOrder/OrderDrawer';

export default class OrdersPage extends Component {
  constructor(props) {
    super(props);
    this.state = { visibleDrawer: false };
  }

  setVisibleDrawer(value) {
    this.setState({ visibleDrawer: value });
  }

  render() {
    return (
      <div>
        <div className={styles.headDiv}>
          <h1 className={styles.header}>Orders</h1>
        </div>
        <AddOrderModal />
        <TableComponent openDrawer={this.setVisibleDrawer} />
        <OrderDrawer visible={this.state.visibleDrawer} />
      </div>
    );
  }
}

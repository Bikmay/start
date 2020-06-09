// @flow
import React, { Component } from 'react';
import TableComponent from '../components/orders-tab/Table';
import styles from './styles/OrdersPage.css';
import AddOrderModal from '../components/orders-tab/ButtonAddOrder/AddOrderModal';
import OrderDrawer from '../components/orders-tab/Drawer/Drawer';
import Data from '../data/Data';

type Props = {};
type State = {
  visibleDrawer: boolean,
  title: string
};

export default class OrdersPage extends Component<Props, State> {
  props: Props;

  constructor(props) {
    super(props);
    this.state = {
      visibleDrawer: false,
      title: 'init',
      client: 'Peter'
    };
    this.moveDrawer = this.moveDrawer.bind(this);
    (this: any).closeDrawer = this.closeDrawer.bind(this);
  }

  moveDrawer(value, title, client) {
    console.log(client);
    console.log('sd');
    this.setState({ visibleDrawer: value, title, client });
  }

  closeDrawer() {
    this.setState({ visibleDrawer: false });
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
          onChangeDrawer={this.closeDrawer}
          title={this.state.title}
          client={this.state.client}
        />
        <button type="submit" onClick={Data.writeOrders()}>
          {' '}
          sdsd
        </button>
      </div>
    );
  }
}

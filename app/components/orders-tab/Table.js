// @flow
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import styles from './Table.css';
import UILogic from '../UILogic';
import Data from '../../data/Data';
import Fetch from '../../Fetch';

type Props = {
  onChangeDrawer: PropTypes.func.isRequired
};

export default class TableComponent extends Component<Props> {
  props: Props;

  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.logic = this.logic.bind(this);
  }

  handle(rowIndex) {
    const orders = this.logic();
    const title = 'Order';
    console.log(rowIndex);
    for (let index = 0; index < orders.length; index++) {
      const element = orders[index];
      if (element.key - 1 == rowIndex) {
        console.log(element.client);
        this.props.onChangeDrawer(true, element.name, element.client);
      }
    }
  }

  logic() {
    const orders = Data.getData('orders');
    const clients = Data.getData('clients');
    let clientId = 0;
    for (let i = 0; i < orders.length; i++) {
      clientId = orders[i].client;
      for (let j = 0; j < clients.length; j++) {
        if (clientId == clients[j].key) {
          orders[i].client = clients[j].name;
        }
      }
    }
    return orders;
  }

  render() {
    const { onChangeVisibleDrawer } = this.props;
    //  console.log(document.body.clientHeight);
    const columns = Data.getOrdesColomns();
    const data = this.logic();
    return (
      <div>
        <Table
          size="small"
          className={styles.table}
          pagination={UILogic.obj1}
          columns={columns}
          dataSource={data}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                this.handle(rowIndex);
              }, // click row
              onDoubleClick: event => {}, // double click row
              onContextMenu: event => {
                console.log('true');
              }
            };
          }}
        />
      </div>
    );
  }
}

// @flow
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Table, Drawer, Button } from 'antd';
import styles from './Table.css';
import UILogic from '../UILogic';
import OrderDrawer from './DrawerOrder/OrderDrawer';

TableComponent.propTypes = {
  openDrawer: PropTypes.func.isRequired
};

export default class TableComponent extends React.Component {
  render() {
    //  console.log(document.body.clientHeight);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Client',
        dataIndex: 'client',
        key: 'client'
      },
      {
        title: 'Type items',
        dataIndex: 'type_items',
        key: 'type_items'
      },
      {
        title: 'Count items',
        dataIndex: 'count_items',
        key: 'count_items'
      },
      {
        title: 'Cost of item',
        dataIndex: 'cost_item',
        key: 'cost_item'
      },
      {
        title: 'Orders cost',
        dataIndex: 'order_cost',
        key: 'order_cost'
      },
      {
        title: 'Priority',
        dataIndex: 'priority',
        key: 'priority'
      }
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '2',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '3',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '4',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '5',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '6',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '7',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '8',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '9',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '10',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '11',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '12',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '13',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '14',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '15',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      },
      {
        key: '16',
        name: 'John Brown',
        client: 32,
        type_items: 'New York No. 1 Lake Park',
        count_items: 32,
        cost_item: 32,
        order_cost: 32,
        priority: 32
      }
    ];

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
                console.log('1');
                this.props.openDrawer(true);
              }, // click row
              onDoubleClick: event => {
                console.log('11');
              }, // double click row
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

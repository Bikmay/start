// @flow
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import styles from './Table.css';
import UILogic from '../UILogic';

type Props = {};

export default class TableComponent extends Component<Props> {
  props: Props;

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
          className={styles.table}
          pagination={UILogic.obj1}
          columns={columns}
          dataSource={data}
        />
      </div>
    );
  }
}

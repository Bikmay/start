// @flow
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';

type Props = {};

export default class TableComponent extends Component<Props> {
  props: Props;

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: 'E-mail',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Company',
        dataIndex: 'company',
        key: 'company'
      },
      {
        title: 'Country',
        dataIndex: 'country',
        key: 'country'
      },
      {
        title: 'Currency',
        dataIndex: 'currency',
        key: 'currency'
      }
    ];
    const data = [
      {
        key: '1',
        phone: '89382223422',
        email: 32,
        company: 'New York No. 1 Lake Park',
        country: 32,
        currency: 32
      },
      {
        key: '2',
        phone: '89382223422',
        email: 32,
        company: 'New York No. 1 Lake Park',
        country: 32,
        currency: 32
      },
      {
        key: '3',
        phone: '89382223422',
        email: 32,
        company: 'New York No. 1 Lake Park',
        country: 32,
        currency: 32
      },
      {
        key: '4',
        phone: '89382223422',
        email: 32,
        company: 'New York No. 1 Lake Park',
        country: 32,
        currency: 32
      }
    ];

    return <Table columns={columns} dataSource={data} size="small" />;
  }
}

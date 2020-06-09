// @flow
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import Data from '../../data/Data';
import styles from './table.css';

type Props = {};

export default class TableComponent extends Component<Props> {
  props: Props;

  render() {
    const columns = Data.getData('client_columns');
    const data = Data.getData('clients');

    return (
      <Table
        className={styles.table}
        columns={columns}
        dataSource={data}
        size="small"
      />
    );
  }
}

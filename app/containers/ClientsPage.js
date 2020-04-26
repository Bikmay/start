// @flow
import React, { Component } from 'react';
import TableComponent from '../components/clients-tab/Table';

type Props = {};

export default class ClientsPage extends Component<Props> {
  props: Props;

  render() {
    return <TableComponent />;
  }
}

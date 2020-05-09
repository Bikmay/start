// @flow
import React, { Component } from 'react';
import TableComponent from '../components/clients-tab/Table';
import AddClientModal from '../components/clients-tab/AddClient/AddClientModal';

type Props = {};

export default class ClientsPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div>
          <h1>Clients</h1>
          <AddClientModal />
        </div>
        <TableComponent />
      </div>
    );
  }
}

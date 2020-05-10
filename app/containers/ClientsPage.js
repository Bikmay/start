// @flow
import React, { Component } from 'react';
import TableComponent from '../components/clients-tab/Table';
import AddClientModal from '../components/clients-tab/AddClient/AddClientModal';
import styles from './styles/ClientsPage.css';

type Props = {};

export default class ClientsPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.headDiv}>
          <h1 className={styles.header}>Clients</h1>
          <AddClientModal className={styles.button} />
        </div>
        <TableComponent />
      </div>
    );
  }
}

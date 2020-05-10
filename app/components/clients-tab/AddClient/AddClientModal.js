import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import AddClientForm from './AddClientForm';
import styles from './AddClientModal.css';

export default class AddClientModal extends React.Component {
  state = { visible: false };

  constructor() {
    this.a = 's';
  }

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div className={styles.buttonAddClientDiv}>
        <Button type="primary" onClick={this.showModal}>
          Add client
        </Button>
        <Modal
          className={styles.customModal}
          title="Add client"
          okText="Create client"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="600px"
        >
          <AddClientForm />
        </Modal>
      </div>
    );
  }
}

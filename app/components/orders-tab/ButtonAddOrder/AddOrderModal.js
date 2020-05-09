import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import AddOrderForm from './AddOrderForm';
import styles from './AddOrderModal.css';

export default class AddOrderModal extends React.Component {
  state = { visible: false };

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
      <div className={styles.buttonAdd}>
        <Button type="primary" onClick={this.showModal}>
          Add order
        </Button>
        <Modal
          title="Add order"
          okText="Create order"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="900px"
        >
          <AddOrderForm />
        </Modal>
      </div>
    );
  }
}

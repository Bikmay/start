import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';
import styles from './Drawer.css';

export default class OrderDrawer extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }

  handle() {
    this.props.onChangeDrawer(false);
  }

  render() {
    const { visible, onChangeDrawer, client } = this.props;
    console.log(client);
    return (
      <Drawer
        title={this.props.title}
        placement="right"
        closable={false}
        onClose={this.handle}
        visible={visible}
        width={640}
      >
        <div className={styles.orderDrawer}>
          <h3>Client:</h3>
          <p>{client}</p>
        </div>
        <div className={styles.orderDrawer}>
          <h3>Type items:</h3>
          <p>words</p>
        </div>
      </Drawer>
    );
  }
}
OrderDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChangeDrawer: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  client: PropTypes.string.isRequired
};

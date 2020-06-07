import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

export default class OrderDrawer extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }

  handle() {
    this.props.onChangeDrawer(false);
  }

  render() {
    const { visible, onChangeDrawer } = this.props;
    return (
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={this.handle}
        visible={visible}
      >
        <p>пидор</p>
      </Drawer>
    );
  }
}
OrderDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onChangeDrawer: PropTypes.func.isRequired
};

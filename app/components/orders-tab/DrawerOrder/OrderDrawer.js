import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Drawer } from 'antd';
import UILogic from '../../UILogic';

OrderDrawer.propTypes = {
  visible: PropTypes.bool.isRequired
};

export default class OrderDrawer extends Component {
  render() {
    const { visible } = this.props;
    return (
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={this.onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    );
  }
}

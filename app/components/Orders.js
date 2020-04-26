// @flow
import React, { Component } from 'react';
import { Button } from 'antd';
import getExchangeRates from '../actions/executeExchangeRates';

type Props = {};

export default class Orders extends Component<Props> {
  props: Props;

  render() {
    return <Button onClick={getExchangeRates()}>s</Button>;
  }
}

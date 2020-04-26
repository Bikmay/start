// @flow
import React, { Component } from 'react';
import Database from '../logic/Database/Database';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <button type="button" onClick={Database.connect}>
        sdadsada
      </button>
    );
  }
}

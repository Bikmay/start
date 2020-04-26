// @flow
import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../components/app-local.css';
import routes from '../constants/routes';
import SidebarPage from './SidebarPage';
// import style from '../components/App.css ';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    const { children } = this.props;
    return (
      <div className="general-div">
        <div className="sl">
          <SidebarPage className="sider" />
        </div>
        <div className={styles.сontainer}>
          <>{children}</>
        </div>
      </div>
    );
  }
  /* render() {
    const { children } = this.props;
    return <>{children}</>;
  } */
}

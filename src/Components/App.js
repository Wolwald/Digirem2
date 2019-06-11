import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import { Headerlp } from './Layouts/Landingpage';
import Dashboard from './Layouts/Dashboard';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Headerlp />

        <Dashboard />

        <Footer />
      </Fragment>
    );
  }
}

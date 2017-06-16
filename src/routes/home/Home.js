/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Header from '../../components/Header';
import Catalog from '../../components/Catalog';
import About from '../../components/About';
import Works from '../../components/Works';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Catalog />
        <About />
        <Works />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Home);

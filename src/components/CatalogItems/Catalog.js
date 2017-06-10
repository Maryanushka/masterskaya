/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Catalog.css';
import Link from '../Link';
import squareImg from './catalog.jpg';
import rectImg from './rectangle.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.catalog_container}>
          <h1>Каталог продукції</h1>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
  
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
import s from './CatalogHeader.css';
import Link from '../Link';


class CatalogHeader extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.catalogHeader_container}>
          <h1>Майстерня</h1>
          <div className={s.catalogHeader_container_wrapper}>
	          <p><Link to="+380634455900">+38 063 445 59 00</Link></p>
	          <p>Доставка по Україні</p>
          </div>
			<Link to="/catalog" className={s.button}>Звязатись з нами</Link>
			<div>
	            <span><a href="#" className={s.enabled}>укр</a></span>
	            <span>/</span>
	            <span><a href="#" className={s.disabled}>рус</a></span>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CatalogHeader);
  
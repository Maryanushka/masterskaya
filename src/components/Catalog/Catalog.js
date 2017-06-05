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
import Navigation from '../Navigation';
import squareImg from './catalog.jpg';
import rectImg from './rectangle.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.catalog_container}>
          <h1>Каталог продукції</h1>
          <div className={s.catalog_container_menu}>
            <ul>
              <li className={s.catalog_container_menu_item}><a href="#">Внутрішне та зовнішне оздоблення</a></li>
              <li className={s.catalog_container_menu_item}><a href="#">Складні архітектурні вироби</a></li>
              <li className={s.catalog_container_menu_item}><a href="#">Садово-паркове мистецтво</a></li>
            </ul>
            <a href="#" className={s.button}>Каталог продукції</a>
          </div>
          <div className={s.catalog_container_modal_item_squre}>
            <img src={squareImg} alt="Портрети" />
            <a href>Портрети</a> 
          </div>
          <div className={s.catalog_container_modal_item_squre}>
            <img src={squareImg} alt="Скульптури" />
            <a href>Скульптури</a>
          </div>
          <div className={s.catalog_container_modal_item_rect}>
            <img src={rectImg} alt="Каміни" />
            <a href>Каміни</a>
          </div>
          <div className={s.catalog_container_modal_item_rect}>
            <img src={rectImg} alt="Столешні" />
            <a href>Столешні</a>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
  
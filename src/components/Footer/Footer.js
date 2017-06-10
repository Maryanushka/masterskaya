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
import s from './Footer.css';
import Link from '../Link';
import mapImg from './map.jpg';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.footer_container}> 
        <img src={mapImg} alt="Карта"/>
          <div className={s.footer_container_contact}>
          <h1>Контакти</h1>
          <p className={s.footer_container_contact_phone}>+38 066 445 59 00</p>
          <p className={s.footer_container_contact_adress}>м. Мукачево, вул. Переяславська, 1</p>     
          <ul className={s.footer_container_menu}>
            <li><a href="#">Каталог продукції</a></li>
            <li><a href="#">Про нас</a></li>
            <li><a href="#">Наші роботи</a></li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);

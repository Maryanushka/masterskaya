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

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.footer_container}> 
        <iframe src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2544.445443859823!2d30.70386341519805!3d50.3768942794653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c3901c5bc785%3A0x1452061acb8b27e9!2z0J_QtdGA0LXRj9GB0LvQsNCy0YHRjNC60LAg0LLRg9C70LjRhtGPLCAxLCDQmtC40ZfQsg!5e0!3m2!1sru!2sua!4v1497578027615'}></iframe>
          <div className={s.footer_container_contact}>
          <h1>Контакти</h1>
          <Link to="+380664455900" className={s.footer_container_contact_phone}>+38 066 445 59 00</Link>
          <p className={s.footer_container_contact_adress}>м. Мукачево, вул. Переяславська, 1</p>     
          <ul className={s.footer_container_menu}>
            <li><Link to="/catalog">Каталог продукції</Link></li>
            <li><Link to="/catalog">Про нас</Link></li>
            <li><Link to="/catalog">Наші роботи</Link></li>
          </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);

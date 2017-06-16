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

class Catalog extends React.Component {
  
  render() {
    return (
      <div className={s.root}>
        <div className={s.catalog_container}>
          <h1>Каталог продукції</h1>
          <div className={s.catalog_container_menu}>
            <ul>
              <li className={s.catalog_container_menu_item}><Link to="/catalog">Внутрішне та зовнішне оздоблення</Link></li>
              <li className={s.catalog_container_menu_item}><Link to="/catalog">Складні архітектурні вироби</Link></li>
              <li className={s.catalog_container_menu_item}><Link to="/catalog">Садово-паркове мистецтво</Link></li>
            </ul>
             <Link className={s.button} to="/catalog">Каталог продукції</Link>  
          </div>
          <div className={s.catalog_container_modal_item_squre}>
            <img src={squareImg} alt="Портрети" />
            <Link  to="/catalog">Портрети</Link> 
          </div>
          <div className={s.catalog_container_modal_item_squre}>
            <img src={squareImg} alt="Скульптури" />
            <Link to="/catalog">Скульптури</Link>
          </div>
          <div className={s.catalog_container_modal_item_rect}>
            <img src={rectImg} alt="Каміни" />
            <Link  to="/catalog">Каміни</Link>
          </div>
          <div className={s.catalog_container_modal_item_rect}>
            <img src={rectImg} alt="Столешні" />
            <Link to="/catalog">Столешні</Link>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Catalog);
  
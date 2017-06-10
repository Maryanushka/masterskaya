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
import s from './About.css';
import Link from '../Link';
import aboutImg from './about.jpg';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.about_container}>
        <img src={aboutImg} alt="Про нас" />
         
          <div className={s.about_container_descr}>
             <h1>Про нас</h1>
             <p>
              Майстерня – це місце, де ваша ідея реалізовується з натурального каменю. 
              Вже більше 5 років ми створюємо унікальні дизайн-проекти для приватних і громадських інтер'єрів.
             </p>
              <p>
              Ми пропонуємо різні варіанти співпраці, серед яких створення дизайн-проектів будь-якої складності, їх авторський супровід та повна реалізація, художнє оформлення інтер'єрів, а також їх доставку та послуги монтування.
             </p>
              <p>
              Найважливіше для нас – ваше естетичне задоволення, тож ми гарантуємо якість нашої роботи та дотримання термінів виконання.
             </p>
             <ul className={s.about_container_menu}>
               <li><a href="#">Детальніше</a></li>
               <li><a href="#">Переглянути роботи</a></li>
             </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
  
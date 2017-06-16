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
import s from './Header.css';
import Link from '../Link';
import logoUrl from './logo.png';


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isOpened: false };
  }
  toggleState() {
    this.setState({ isOpened: !this.state.isOpened });
  }
  render() {
    var  addDropdownClass = this.state.isOpened ? "switch on" : "switch";
    console.log('isOpened', this.state.isOpened);
    let dropdownText;
    if (this.state.isOpened) {
      dropdownText =  <div className={s.mobile_menu_container_wrapper}>
                        <div className={s.mobile_menu_container_inner}> 
                          <img src={logoUrl} width="40px" height="100px" alt="Майстерня" />
                            <div className={s.header_content_right_info}>
                              <h2>Майстерня</h2>
                              <Link to="+380664455900" className={s.header_content_right_info_phone}> +38 066 445 59 00 </Link>
                              <p className={s.header_content_right_info_adress}> м. Мукачево, вул. Переяславська, 1</p>
                            </div>
                        </div>  
                        <div className={s.mobile_menu_container_menu}>
                          <ul>
                            <li className={s.menu_item}><Link to="/catalog">Каталог продукції</Link></li>
                            <li className={s.menu_item}><Link to="/catalog">Про нас</Link></li>
                            <li className={s.menu_item}><Link to="/catalog">Наші роботи</Link></li>
                          </ul>
                        </div>
                        <Link to="/" className={s.button_mobile}>Звязатись з нами</Link>
                     </div>;
    }
    return (
      <div className={s.root}>
        <div className={s.container}>
        <nav className={s.mobile_menu_container}>
            <h1>Майстерня</h1>
            <div className={s.switch} onClick={this.toggleState.bind(this)}>
              <div className={s.menu}></div>
            </div>{dropdownText}
        </nav>
        <div className={s.header_logo}>
            <img src={logoUrl} width="104px" height="auto" alt="Майстерня" /> 
            <p className={s.header_title}>Майстерня</p>        
          </div>
        </div>

        <div className={s.header_content}>

          <div className={s.header_content_left}>
            <p className={s.main_title}>Створюємо шедеври з натурального каменю власноруч</p>
            <span><a href="#" className={s.enabled}>укр</a></span>
            <span>/</span>
            <span><a href="#" className={s.disabled}>рус</a></span>

            <Link to="/catalog" className={s.button}>Звязатись з нами</Link>
          </div>

          <div className={s.header_content_right}>

            <div className={s.header_content_right_inner}> 
              <img src={logoUrl} width="48px" height="133px" alt="Майстерня" />
              <div className={s.header_content_right_info}>
                <h2>Майстерня</h2>
                <Link to="+380664455900" className={s.header_content_right_info_phone}> +38 066 445 59 00 </Link>
                <p className={s.header_content_right_info_adress}> м. Мукачево, вул. Переяславська, 1</p>
              </div>
            </div>  
            <div className={s.header_content_right_menu}>
              <ul>
                <li className={s.menu_item}><Link to="/cataloLink">Каталог продукції</Link></li>
                <li className={s.menu_item}><Link to="/cataloLink">Про нас</Link></li>
                <li className={s.menu_item}><Link to="/cataloLink">Наші роботи</Link></li>
              </ul>
            </div>          
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
  
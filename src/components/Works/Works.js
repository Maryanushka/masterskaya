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
import s from './Works.css';
import Link from '../Link';
import worksImg from './worksImg.jpg';


class Header extends React.Component {
 
 constructor(props) {
   super(props);
   this.state={
    data: []
   }  
 }

componentDidMount() {
   fetch('http://maysternja.dataroot.co/projects/')  
  .then(response => response.json())
  .then(json => {
    console.log(json);
      this.setState({
         data: json
       })
   });
}

  render() {


    return (
      <div className={s.root}>
        <div className={s.works_container}>
         <h1>Краще один раз подивитись</h1>
         <p>Фото проектів з нашого <strong>instagram</strong>.</p>
         <div className={s.works_container_wrapper}>

            
            {this.state.data.map(function(d){
              return(
                <div className={s.works_container_caption}>
                  <Link to="/" ><img src={d.img} alt={d.alt} /></Link>
                  <Link to="/" ><p>{d.tags.map(function(t){
                    return("#" + t + " ")
                  })}</p></Link>
                </div>
                )
            })}
                  
               

          <a href="#" className={s.button}>Всі проекти</a>
        </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
   
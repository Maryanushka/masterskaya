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
import s from './CatalogItems.css';
import Architect from './Architect';
import Park from './Park';
import Link from '../Link';

class CatalogItems extends React.Component {
constructor(props) {
   super(props);
   this.state={
    decoration: []
   }  
 }
componentDidMount() {
   fetch('http://maysternja.dataroot.co/catalog/decoration/')  
  .then(response => response.json())
  .then(json => {
    console.log(json);
      this.setState({
         decoration: json
       })
   });
}
  render() {
    return (
      <div className={s.root}>
        <div className={s.catalog_container}>
          <h1>Каталог продукції</h1>
	          <div className={s.inner_aqufer_container}>
	          		<p className={s.inner_aqufer_container_p}>Внутрішне та зовнішне оздоблення</p>
	          		<div className={s.inner_aquifer_container_wrapper}>
		          		<ul className={s.inner_aquifer_container_wrapper_filter}>
		          			<li>Вид каменю:</li>
		          			<li>Мармур</li>
		          			<li>Граніт</li>
		          			<li>Пісковик</li>
		          			<li>Вапняк</li>
		          			<li>Квацит</li>
		          			<li>Онікс</li>
		          		</ul>
		          		<div className={s.inner_aquifer_container_wrapper_image}>
		          		        {this.state.decoration.map(function(deco){
		          			return(
		          				<div className={s.image_container}>
		          				<img src={deco.img} alt={deco.alt} />
		          				</div>)})}
		          		</div>
	          		</div>
	          </div>
	          <Architect />
	          <Park />
          		
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CatalogItems);
  
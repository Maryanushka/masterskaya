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


let img ;
let t = [{type: "marble"}, {type: 'onyx'},{type: 'granite'},{type:'quartzite'},{type:'sandstone'},{type:'limestone'}];

class CatalogItems extends React.Component {
constructor(props) {
   super(props);
   this.state={
    decoration: [],
    type: []
   }  
   this.getMarble = this.getMarble.bind(this); 
   this.getGranite = this.getGranite.bind(this); 
   this.getDefault = this.getDefault.bind(this);
 };


componentDidMount() {
    var apiRequest1 = fetch('http://maysternja.dataroot.co/catalog/decoration/?type=%7BString%7D')
    	.then(function(response){ 
             return response.json()
    });
    var apiRequest2 = fetch('http://maysternja.dataroot.co/catalog/decoration/')
    	.then(function(response){
             return response.json()
    });
      Promise.all([apiRequest1,apiRequest2]) 
      .then(values => {
          this.setState({
             decoration: values[1],
             type: values[0]         
           })
       });  
}

getMarble(){
  let data = this.state.decoration; 
  let j =0;
  for( let i= 0; i < data.length; i++){
      data[i].type= t[j%6];
  }

  return img = data
  .filter(function(data){return data.type['type'] === 'marble';})
  .map((deco,i) => {return(<div className={s.image_container} key={i}>
                                <img src={deco.img} alt={deco.alt} type={deco.type['type']} />
                            </div>)});
}

getGranite(){
  let data = this.state.decoration; 
  let j =0;
  for( let i= 0; i < data.length; i++){
      data[i].type= t[j%6];
  }
  return img = data
  .filter(function(data){return data.type['type'] === 'granite';})
  .map((deco,i) => {return(<div className={s.image_container} key={i}>
                                    <img src={deco.img} alt={deco.alt} type={deco.type['type']} />
                                </div>)});
}

getDefault(){
  let data = this.state.decoration; 
  let j =0;
  for( let i= 0; i < data.length; i++){
      data[i].type= t[j%6];
  }
  return img = data.map((deco,i) => {return(<div className={s.image_container} key={i}>
                                    <img src={deco.img} alt={deco.alt} type={deco.type['type']} />
                                </div>)});
}
  render() {
  img = this.getDefault();

    return (
      <div className={s.root}>
       <div className={s.catalog_container}>
         <h1>Каталог продукції</h1>
	          <div className={s.inner_aqufer_container}>
	          		<p className={s.inner_aqufer_container_p}>Внутрішне та зовнішне оздоблення</p>
	          		<div className={s.inner_aquifer_container_wrapper}>
		          		<ul className={s.inner_aquifer_container_wrapper_filter}>
		          			<li>Вид каменю:</li>
		          			<li onClick={this.getMarble} type='marble'>Мармур</li>
		          			<li onClick={this.getGranite} type='granite'>Граніт</li>
		          			<li>Пісковик</li>
		          			<li>Вапняк</li>
		          			<li>Квацит</li>
		          			<li>Онікс</li>
		          		</ul>
		          		<div className={s.inner_aquifer_container_wrapper_image}>		          				        				
		          				{img}		          				
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
  
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

class About extends React.Component {
   constructor(props) {
   super(props);
   this.state={
    data: {}
   }  
 }
  componentDidMount() {
   fetch('http://maysternja.dataroot.co/about/')  
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
        <div className={s.about_container}>
          <img src={this.state.data.img} alt="Про нас" />    

                <div className={s.about_container_descr}>
                   <h1>{this.state.data.title}</h1>
                   <div dangerouslySetInnerHTML={{__html: this.state.data.content}}>
                   
                    </div> 
                   <ul className={s.about_container_menu}>
                     <li><Link to="/catalog">Детальніше</Link></li>
                     <li><Link to="/catalog">Переглянути роботи</Link></li>
                   </ul>
                </div>
        </div>        
      </div>
    );
  }
}

export default withStyles(s)(About);
  
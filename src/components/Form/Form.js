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
import s from './Form.css';
import Link from '../Link';

class Form extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      textarea: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event){
    console.log("Name: " + this.state.name);
    this.setState({name: event.target.value});
  }
  handlePhoneChange(event){
    console.log("Phone: " + this.state.phone);
    this.setState({phone: event.target.value});
  }
  handleEmailChange(event){
    console.log("Email " + this.state.email);
    this.setState({email: event.target.value});
  }  
  handleTextareaChange(event) {
    console.log("Textarea " + this.state.textarea);
    this.setState({textarea: event.target.value});
  }



  handleSubmit(event) {
     let data = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      textarea: this.state.textarea
    }
    console.log(data);

      fetch('http://maysternja.dataroot.co/callback', {  
          method: 'post',  
          headers: {  
            "Content-type": "multipart/form-data"  
          },  
          body: data  
        }) 
        .then(function (data) {  
          console.log('Request succeeded with JSON response', data);  
        })  
        .catch(function (error) {  
          console.log('Request failed', error);  
        });

      // 'http://maysternja.dataroot.co/callback'
// http://jsonplaceholder.typicode.com/posts

      event.preventDefault();
  }

  

  render() {
    return (
      <div className={s.root}>
        <div className={s.form_container}> 
          <h1>Виготовимо наступний шедевр разом</h1>
          <p>Зв’яжіться з нами та дізнайтесь більше</p>
          <div className={s.form_container_wrapper}>
            <form onSubmit={this.handleSubmit}>
                <input  required
                        type="text"
                        name="name"
                        placeholder="Ім'я"
                        value={this.state.name} 
                        onChange={this.handleNameChange} />

                <input  required
                        type="text"
                        name="phone number"
                        placeholder="Телефон"
                        value={this.state.phone}
                        onChange={this.handlePhoneChange}/>

                <input  required
                        type="email"
                        placeholder="E-mail"
                        name="Email"
                        value={this.state.email} 
                        onChange={this.handleEmailChange} />

                <textarea placeholder="Ваша ідея або питання"
                          name="question"
                          value={this.state.textarea} 
                          onChange={this.handleTextareaChange} />

                <input type="submit" value="Зв'язатись" className={s.button} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Form);

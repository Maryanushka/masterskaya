import React from 'react';

var React = require('react');
var Slider = require('react-slick');

class SimpleSlider extends React.Component {
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
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {this.state.decoration.map(function(deco){
                    return(
                      <div>
                       <Link to="/" ><img src={deco.img} alt={deco.alt} /></Link>
                      </div>
                      )
                  })}
      </Slider>
    );
  }
}
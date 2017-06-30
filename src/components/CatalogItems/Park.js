import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogItems.css';
import Link from '../Link';

class Park extends React.Component {
constructor(props) {
   super(props);
   this.state={
    park: []
   }  
 }
componentDidMount() {
   fetch('http://maysternja.dataroot.co/catalog/park/')  
  .then(response => response.json())
  .then(json => {
    console.log(json);
      this.setState({
         park: json
       })
   });
}
  render() {
    return (  
    	<div className={s.park_container}>
	          <div className={s.inner_park_container}>
	          		<p>Складні архітектурні вироби</p>
	          		<div className={s.inner_parkr_container_wrapper}>
		          		<div className={s.inner_park_container_wrapper_image}>
		          		        {this.state.park.map(function(park, index){
		          			return(
		          				<div className={s.image_container} key={index}>
		          				<img src={park.img} alt={park.alt} />
		          				</div>)})}
		          		</div>
		          	</div>
	          </div>
         </div>
    );
  }
}

export default withStyles(s)(Park);
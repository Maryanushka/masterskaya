import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CatalogItems.css';
import Link from '../Link';

class Architect extends React.Component {
constructor(props) {
   super(props);
   this.state={
    architecture: []
   }  
 }
componentDidMount() {
   fetch('http://maysternja.dataroot.co/catalog/architecture/')  
  .then(response => response.json())
  .then(json => {
    console.log(json);
      this.setState({
         architecture: json
       })
   });
}
  render() {
    return (  
    	<div className={s.architect_container}>
	          <div className={s.inner_architect_container}>
	          		<p>Складні архітектурні вироби</p>
	          		<div className={s.inner_architect_container_wrapper}>
		          		<div className={s.inner_architect_container_wrapper_image}>
		          		        {this.state.architecture.map(function(arc, index){
		          			return(
		          				<div className={s.image_container} key={index}>
		          				<img src={arc.img} alt={arc.alt} />
		          				</div>)})}
		          		</div>
		          	</div>
	          </div>
         </div>
          
    );
  }
}

export default withStyles(s)(Architect);

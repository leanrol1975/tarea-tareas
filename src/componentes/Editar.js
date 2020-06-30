import React, { Component } from "react";

class Cambiar extends Component {
 constructor(props){
 super(props);
this.state = {prueba: '', id : ''}
this.handleChange = this.handleChange.bind(this);
this.handleClick = this.handleClick.bind(this);
 }

 handleChange(event) {
  this.setState({prueba: 'nada'})
  
  
}

handleClick(e){

this.props.hhhh();
e.preventDefault();
}

    


 render(){
  return(

<div>


</div>

  );

 }
}
export default Cambiar;
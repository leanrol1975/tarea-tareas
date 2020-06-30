import React, {Component} from 'react';

class TareasListado extends Component{
constructor(props){
super(props);


}





// editamos
Editar = ( dato ) =>{
   this.props.editamos( dato );   
   
  }
  
  Terminar = (dato) =>{
    this.props.termina( dato );   
    //alert("se termino la trea");
   }



    


 render(){
     return(
  

<div className="row">




{this.props.lista.map( dato =>
     <div className="col-md-4 "key={dato.id}>
    <div className="card">
      <div className="card-body">
<h4 className="card-title vv">{dato.id} - {dato.titulo}</h4>
      
       <input type="text" className="form-control"value={dato.descripcion}/>&nbsp;&nbsp;
       <button className="btn btn-info boton2" onClick={() => this.Editar(dato)}>select</button>&nbsp;
        <button className="btn btn-danger boton2" onClick={() => this.Terminar(dato)}>Terminar</button>&nbsp;
        
      </div>
    </div>
  </div>
 )}









</div>





        


     
     );

     }
 
}
export default TareasListado;
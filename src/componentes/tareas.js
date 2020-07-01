import React, {Component} from 'react';

class Tareas extends Component{
constructor(props){
super(props);

this.handleSubmit = this.handleSubmit.bind(this);

}
  
//agregamos un tarea
handleSubmit(e) {
    e.preventDefault();
    this.props.AddTarea();
}


//editamos una tarea


 render(){
    
    const { handleChange, formValues } = this.props ;
    const { descripcion, titulo, id} = formValues;
     return(
        <div className="row">

            <div className="col-sm-4 col-md-4 col-lg-4 col-xl-3 col-xs-12 card">

                <form onSubmit={ this.handleSubmit } className="form-group">
                <h3>Ingreso de tareas&nbsp;&nbsp;</h3>
                    <label>Titulo</label>
                    <input name="titulo" className="form-control"onChange={ handleChange } value={ titulo} type="text"></input>
                    <label>Descripcion</label>
                    <input name="descripcion" className="form-control"onChange={ handleChange } value={descripcion} type="text"></input>&nbsp;
                    <button type="submit" className="btn btn-primary boton2"> Agregar / Editar </button> &nbsp;&nbsp;
                   
                </form>

            </div>
    
            </div>
    
       

    

     
     );


 }

}
export default Tareas;
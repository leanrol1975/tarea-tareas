import React, {Component} from 'react';





class TareasListado extends Component{
constructor(props){
super(props);

this.state = {nuevatareaTerminada: '', estado: '', titulo: ''}
this.state = {
  tareasTerminadas: [
    {id:0, descripcion: 'comprar pintura hoy',estado: 'terminada',titulo:'pintura'},
    
    ]
 }

 this.handleSubmit = this.handleSubmit.bind(this);
 this.handleTarea = this.handleTarea.bind(this);
 this.handleEstado = this.handleEstado.bind(this);
 this.handleTitulo = this.handleTitulo.bind(this);
 this.handleClick = this.handleClick.bind(this);

}

  handleTarea(e) { this.setState({nuevatareaTerminada: e.target.value}) }
  handleEstado(e) { this.setState({estado: e.target.value}) }
  handleTitulo(e) { this.setState({titulo: e.target.value}) }
  

 handleClick(e){
    this.handleIncrement();
     
    e.preventDefault();

 }
  handleSubmit(e) {

    this.handleIncrement();
     
      e.preventDefault();
  }

  handleIncrement = () => {

    const nuevaListaTareas = this.props.tareas; 
    nuevaListaTareas.push({
        id: nuevaListaTareas.length,
        descripcion: this.state.nuevatareaTerminada,
        estado:  'terminada',
        titulo: this.state.titulo
    })

    this.setState({ tareasTerminadas: nuevaListaTareas});
    console.log( this.state.tareasTerminadas );
}






  

lista = () => this.state.tareasTerminadas.map(t => <li>{t.id}, Titulo = {t.titulo} descripcion = {t.descripcion}</li>)
listadoB = () => this.props.tareas.filter(t => t.id == 0)

 

lista2 = () => this.props.tareas.map(t => 
    <form>
    <div class="card-body  cc">
    <h5 class="card-title">Titulo</h5>
    <input type="text" class="form form-control  input-sm" name="titulo" value={t.titulo}/>
    <p class="card-text">Descripcion de la tarea:</p>
    <input type="text" class="form form-control  input-sm" name="nuevatareaTerminada" value={t.descripcion}/>
    <p class="card-text">Estado de la tarea:</p>
  <select class="form form-control input-sm"name="estado" value={t.estado}>ESTADO
  <option>no terminada</option>
  <option>terminada</option>
  
  </select> 
  <input type="button" class="btn btn-primary bb" value="Terminar tarea" onClick={this.handleClick}/>
  </div>
  </form>
  );





 render(){
     return(


     <div class="divi2 card">
     <h3 class="card-title">{this.props.titulo}</h3>
    {this.lista2()}
    
    
     </div>


     
     );


 }
}
export default TareasListado;
import React, {Component} from "react";
import Tareas from './componentes/tareas.js';
import TareasLista from './componentes/tareaslistado.js';
import TareasTerminadas from './componentes/tareasTerminadas.js'


class App extends Component {

    constructor(){
    super();


     this.state = {nuevatarea: '', estado: '', titulo: ''}

    this.state = {
     
      tareas: [
  
        {id:0, descripcion: 'comprar pintura hoy',estado: 'no terminada',titulo:'pintura'},
        
        ]
  
  
  
  
     }


   // this.state = {value: ''};

    
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.handleTarea = this.handleTarea.bind(this);
    this.handleEstado = this.handleEstado.bind(this);
    this.handleTitulo = this.handleTitulo.bind(this);
    
    }

 //constructor

    
  
    

   

  handleTarea(e) { this.setState({nuevatarea: e.target.value}) }
  handleEstado(e) { this.setState({estado: e.target.value}) }
  handleTitulo(e) { this.setState({titulo: e.target.value}) }
    handleSubmit(event) {

      this.handleIncrement();
        this.listado();
        this.listadoDos();
       
        event.preventDefault();
    }

  




    handleIncrement = () => {

      const nuevaListaTareas = this.state.tareas; 
      nuevaListaTareas.push({
          id: nuevaListaTareas.length,
          descripcion: this.state.nuevatarea,
          estado:  this.state.estado,
          titulo: this.state.titulo
      })

      this.setState({ tareas: nuevaListaTareas});

      console.log( this.state.tareas );
  }

  handlePasarPendientes = () => {

    const nuevaListaPendientes = this.state.tareas.filter(t => t.estado == 'no terminada');
   this.setState({ tareasPendientes: nuevaListaPendientes});
    console.log( this.state.tareasPendientes);
}



listado = () => this.state.tareas.filter(tarea => tarea.estado == 'no terminada')
listadoDos = () => this.state.tareas.filter(tarea => tarea.estado == 'terminada')


render(){
  return (
    <div className="App">
      <div class="tt card">
   <form onSubmit={this.handleSubmit}>
 
   <div class="card-body">
   <h4 class="card-title">Nueva Tarea</h4>
   <p class="card-text">Titulo:</p>
    <input type="text" class="form form-control  input-sm" name="titulo" value={this.state.value} onChange={this.handleTitulo} placeholder="Titulo"/>
    <p class="card-text">Descripcion de la tarea:</p>
    <input type="text" class="form form-control  input-sm" name="nuevatarea" value={this.state.value} onChange={this.handleTarea} placeholder="Descripcion"/>
    <p class="card-text">Estado:</p>
  <select class="form form-control input-sm"name="estado" value={this.state.value} onChange={this.handleEstado}placeholder="Estado">ESTADO
  <option>estado</option>
  <option>no terminada</option>
  <option>terminada</option>
  
  </select> 
  <input type="submit" class="btn btn-success bb" value="Guardar tarea" />
  </div>
  </form>
     
     </div>

     <div class="listas"> 

     <TareasLista titulo="Tareas No Terminadas!" tareas={this.listado()}/>
     <TareasLista titulo="Tareas Terminadas!" tareas={this.listadoDos()}/>


     </div>
    </div>//className
    
  );
   }

}
export default App;
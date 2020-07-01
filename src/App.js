import React, {Component} from "react";
import Tareas from './componentes/tareas.js';
import TareasListado from './componentes/tareaslistado.js'
import TareasTerminadas from './componentes/tareasTerminadas.js'


class App extends Component {

    constructor(){
    super();
    this.state = {
      formValues: {
          descripcion: '',
          titulo: '',
          estado: '',
          id: null
      },
       tareas :[
       ]
    }
  //declare global
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeForm = this.handleChangeForm.bind(this);

  } //fin constructor 


//seteo tareas desde json a localStorage
componentDidMount(){
  if (localStorage.getItem("tareas") === null) {
    this.getMyTareas();
  } else {
   let tareas = localStorage.getItem("tareas")
    this.setState({ tareas: JSON.parse(tareas) })
  }
}



//nombres de los inputs
 handleChangeForm(e) {
  const { name, value } = e.target;
  this.setState( {
      formValues: {
          ...this.state.formValues ,
          [name] : value
      }
  })
}
  
handleClick(e){}

//agrego elementos a la lista
handlAgregar = ( parametro ) => {
if(this.state.formValues.id){
   
   alert('editando');
   this.state.formValues.id = null; //seteo null id para seguir agregando
}
else
{
  if(this.state.formValues.descripcion === ''  ){

     alert('la trea no tiene descripcion !!!')
  }
  else{
    const nuevalistaTareas = this.state.tareas; 
    nuevalistaTareas.push({
        id: nuevalistaTareas.length,
        titulo: this.state.formValues.titulo,
        descripcion:  this.state.formValues.descripcion,
        estado: 'no terminada'
    })
    this.setState({ tareas: nuevalistaTareas});
    console.log( this.state.tareas );
    localStorage.setItem("tareas", JSON.stringify(this.state.tareas));
      }
      //para vaciar los input (consultar si esta bien...)
      this.setState({
        formValues:{
           titulo: '',
           descripcion: ''
        },
     })
    }
}
    

//tareas filtradas por estado  
listaA = () => this.state.tareas.filter(t => t.estado ==='no terminada');
listaB = () => this.state.tareas.filter(t => t.estado ==='terminada');

//para seleccionar y poder editar
handleSelct= (dato) =>{
this.setState({

   formValues:{
      titulo: dato.titulo,
      descripcion: dato.descripcion,
      estado: dato.estado,
      id: dato.id,   
   },
 
})

}
// para editar la tarea
handleEditamos = (dato) =>{
  let num = dato.id;
  this.state.tareas.splice(num, 1 ,{id: num,
     titulo: this.state.formValues.titulo,
     descripcion: this.state.formValues.descripcion,
     estado:'no terminada'});
     console.log(this.state.tareas);


}




//para cambiar estado y terminar
handleCambiarEstado = (dato) =>{
    alert("La tarea nro." + dato.id + "   fue finalazada! ");
    let num = dato.id;
    this.state.tareas.splice(num, 1 ,{id: num, titulo: dato.titulo,descripcion: dato.descripcion, estado:'terminada'});
    console.log(this.state.tareas);

 this.setState({

  formValues:{
     titulo: '',
     descripcion: ''  
     },

   })
}


//leemos json y pasamos a localStorage
getMyTareas = async () => {
const respuesta = await fetch("http://localhost:3000/myTareas.json");
const archivo = await respuesta.json()
this.setState({tareas : archivo});
localStorage.setItem('tareas', JSON.stringify(archivo));


}


//pruebo localstorage en consola
handleleerStorage = () =>{
  const consultar = JSON.parse(localStorage.getItem("tareas"));
  console.log(consultar);
}



render(){
  return (
    
    <div className="App">
  
      <Tareas
                    AddTarea={ this.handlAgregar }
                    formValues={this.state.formValues}
                    handleChange={ this.handleChangeForm }
                    
                />
                
       
     <a href='#'className='' onClick={this.handleleerStorage}>Leer localStorage ( consola )</a>         
     <TareasListado titulo={"Tareas no terminadas"}
      lista={this.listaA()}
      seleccionamos={this.handleSelct}
      termina ={this.handleCambiarEstado}
     
     
      />
     <TareasTerminadas titulo="Tareas terminadas" lista2={this.listaB()}/>
   
    </div>//App
    
  );
   }

}
export default App;
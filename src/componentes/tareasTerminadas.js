import React, {Component} from "react";

class TareasTerminadas extends Component{
   constructor(props){
   super(props);



   
   }
     
   


   

   render(){
      return(


     <div>
               <h4>
               {this.props.titulo}
                </h4>

                <ul>
                { this.props.lista2.map( t => <li key={t.id}>{t.id}, { t.descripcion} , {t.estado}</li> ) }
                </ul>

     </div>

      );

      }

}

export default TareasTerminadas;
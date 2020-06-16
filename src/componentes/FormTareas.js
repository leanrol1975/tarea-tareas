import React from 'react';

class FormTareas extends React.Component {
    constructor( props ) {
        super( props );
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit(e) {
        e.preventDefault();

        this.props.onAddTarea();
    }

    
    render() {

        const { handleChange, formValues } = this.props ;
        const  {nuevatarea} = formValues;

        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>Tarea Nueva</label>&nbsp;&nbsp;&nbsp;
                    <input name="nuevatarea"  onChange={ handleChange } value={ nuevatarea } type="text"></input>
                    
                    &nbsp;&nbsp;<button type="submit" className="btn btn-primary"> Agregar Tarea</button>
                </form>

            </div>
        )
    }

}

export default FormTareas;
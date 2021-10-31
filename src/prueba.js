import React, { Component } from 'react'

export default class Prueba extends Component {

    constructor(props){
        super(props)

        this.state ={
            nombre: "juan"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.nombre}</h1>

                <button onClick={()=>{this.setState({nombre:"Seba"})}}>BOTON</button>
            </div>
        )
    }
}

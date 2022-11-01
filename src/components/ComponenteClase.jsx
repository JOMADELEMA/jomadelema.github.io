import React from "react";

class Componente2 extends React.Component {
  render() {
    return (<div>Hola {this.props.texto}</div>);
  }
}

export class Listado extends React.Component {
  render() {
    return (
        <ul>

            {this.props.children}
        </ul>
    )
  }
}

const lista = [
    "articulo 1", 
    "articulo 2",
    "articulo 3",
    "articulo 4",
    "articulo 5"
]

export class Item extends React.Component {
    render() {
        return (
            <li>{this.props.elemento}</li>
        )
    }
}

Componente2.defaultProps = {texto: " - Ingrese un nombre - "};

export default class ComponenteClase extends React.Component {
  render() {
    return (
      <>
        <div>Hola Mundo </div>
        <Componente2 texto="John Doe"/>
        <br />
        <Componente2 />

        <br />

        <Listado >
            {lista.map((item)=>(
                <Item elemento={item}/>
            ))}
        </Listado>
      </>
    );
  }
}

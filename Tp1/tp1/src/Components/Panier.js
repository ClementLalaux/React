import React, { Component } from 'react'
export class Panier extends Component { 

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h3>Panier : </h3>
                {this.props.produitChoisis.map((produitChoisis,i) => (<p key={i}>{produitChoisis.titre}</p>))}
                <hr></hr>
                <p>Total : {this.props.prix}</p>
            </>
        )
    }
}
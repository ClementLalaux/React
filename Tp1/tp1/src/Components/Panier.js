import React, { Component } from 'react'
export class Panier extends Component { 

    constructor(props) {
        super(props)
    }

    resetPanier = (e) => {
        e.preventDefault()
        this.props.rPanier()
    }

    render() {
        return (
            <>
                <h3>Panier : </h3>
                {this.props.produitChoisis.map((produitChoisis,i) => (<p key={i}> : {produitChoisis.titre} : {produitChoisis.prix}</p>))}
                <hr></hr>
                <p>Total : {this.props.prix}</p>
                <a href="#" onClick={this.resetPanier} >Reset le panier</a>
            </>
        )
    }
}
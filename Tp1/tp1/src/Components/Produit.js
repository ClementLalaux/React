import React, { Component } from 'react'
import "../index.css"
export class Produit extends Component { 

    constructor(props) {
        super(props)
        this.state = {}
    }

    clickProduit = (e) => {
        e.preventDefault()
        this.props.recupereProduitById(e.target.dataset.id)
    }

    render() {
        const {id,titre,prix,description} = this.props.produit

        return (
            <>
            <tr>
                <td>{id}</td>
                <td>{titre}</td>
                <td>{prix}</td>
                <td>{description}</td>
                <td><a href="#" onClick={this.clickProduit} data-id={id}>Ajouter au panier</a></td>
            </tr>
            </>
        )
    }
}
import React, { Component } from 'react'
import { Produit } from './Produit'
import "../index.css"
import { Panier } from './Panier'

export class Magasin extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            produits : [
                {
                    id : 0,
                    titre : "produit1",
                    prix : 49.99,
                    description : "Lorem ipsum"
                },
                {
                    id : 1,
                    titre : "produit2",
                    prix : 49.99,
                    description : "Lorem ipsum"
                },
                {
                    id : 2,
                    titre : "produit3",
                    prix : 49.99,
                    description : "Lorem ipsum"
                },
                {
                    id : 3,
                    titre : "produit4",
                    prix : 49.99,
                    description : "Lorem ipsum"
                },
                {
                    id : 4,
                    titre : "produit5",
                    prix : 49.99,
                    description : "Lorem ipsum"
                },
                {
                    id : 5,
                    titre : "produit6",
                    prix : 49.99,
                    description : "Lorem ipsum"
                },
            ],
            tableProduitChoisis : [
            ],
            prix : 0
        }
        
    }

    recupereProduitById = (id) => {
        const tmpTableProduitChoisis = [...this.state.tableProduitChoisis]
        let tmpPrix = this.state.prix;
        this.state.produits.forEach(p => {
            if(p.id == id){
                tmpTableProduitChoisis.push(this.state.produits[id]);
                tmpPrix += this.state.produits[id].prix;
            }
        })
        this.setState({tableProduitChoisis : [...tmpTableProduitChoisis]})
        this.setState({prix : tmpPrix});
    }

    render() {

        return (
            <>
            <div className='flex'>
                <div className='div-table'>
                <h3>Produits : </h3>
                <table className='table-produits'>
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Nom</th>
                            <th>Prix</th>
                            <th>Description</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.produits.map((produit,i) => (<Produit produit={produit} key={i} recupereProduitById={this.recupereProduitById}></Produit>))}
                    </tbody>
                </table>
                </div>
                <div className='div-magasin'>
                    <Panier produitChoisis={this.state.tableProduitChoisis} prix={this.state.prix}>

                    </Panier>
                </div>
            </div>
                
            </>
        )
    }
}
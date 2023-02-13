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
                    titre : "Lait",
                    prix : 1.92,
                    description : "Lorem ipsum"
                },
                {
                    id : 1,
                    titre : "Oeuf",
                    prix : 2.50,
                    description : "Lorem ipsum"
                },
                {
                    id : 2,
                    titre : "Farine",
                    prix : 0.99,
                    description : "Lorem ipsum"
                },
                {
                    id : 3,
                    titre : "Chocolat",
                    prix : 2.25,
                    description : "Lorem ipsum"
                },
                {
                    id : 4,
                    titre : "Fleur d'oranger",
                    prix : 4.36,
                    description : "Lorem ipsum"
                }
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
                tmpPrix += Number((this.state.produits[id].prix).toFixed(2));
            }
        })
        this.setState({tableProduitChoisis : [...tmpTableProduitChoisis]})
        this.setState({prix : tmpPrix});
    }

    rPanier = () => {
        const tmpT = [];
        const tmpP = 0;
        this.setState({tableProduitChoisis : tmpT})
        this.setState({prix : tmpP})
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
                    <Panier produitChoisis={this.state.tableProduitChoisis} prix={this.state.prix} rPanier={this.rPanier}>

                    </Panier>
                </div>
            </div>
                
            </>
        )
    }
}
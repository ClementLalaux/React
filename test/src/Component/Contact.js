import { Component } from 'react';
import { Adresse } from './Adresse';

export class Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            contact : { 
                nom: "nom contact", 
                prenom: "prenom contact", 
                telephone: "0123456789", 
                adresse: { rue: "ma rue", ville: "ma ville", cp: "59200" }
            } 
        }
    }

    render() {
        const {nom, prenom, telephone} = this.state.contact;
        return(
            <div>
                Nom : {nom}, Prénom : {prenom}, Téléphone : {telephone}
                <Adresse adresse={this.state.contact.adresse}></Adresse>
            </div>
        )
    }
}
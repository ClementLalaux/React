import { Component } from 'react';

import { Contact } from './Contact';

export class Data extends Component{
    constructor(props){
        super(props)
        this.state = { contact : [
            {
                nom: "LALAUX", 
                prenom: "Clement", 
                telephone: "0123456789",
                actif : true, 
                adresse: { rue: "Rue Roger Salengro", ville: "Aulnoye Aymeries", cp: "59620" }
            },
            {
                nom: "VALJEAN", 
                prenom: "Jean", 
                telephone: "0123456789", 
                actif : false,
                adresse: { rue: "Rue Charpentier", ville: "Lille", cp: "59200" }
            }
        ]};
    }

    render() {
        return(
            <div>
                {this.state.contact.map((c,i) => (<Contact key={i} info={c}></Contact>))}
            </div>
        )
    }
}
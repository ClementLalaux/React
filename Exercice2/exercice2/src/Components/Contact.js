import { Component } from 'react';
import { Adresse } from './Adresse';
import '../Assets/style.css';

export class Contact extends Component{
    constructor(props){
        super(props)
    }

    render() {
        const {nom, prenom, telephone,actif,adresse} = this.props.info;
        return(
            <div>
                <h3>Contact : </h3>
                <p className={actif ? "ClassActive" : "ClassPasActive"}>{nom} {prenom} {telephone}</p>
                <Adresse adresse={adresse}></Adresse>
            </div>
        )
    }
}
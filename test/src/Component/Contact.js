import { Component } from "react";
import  Adresse  from "./Adresse";


class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            nom : props.nom,
            prenom : props.prenom,
            telephone : props.telephone,
        };
    }

    render(){
        return(
            <div>
                <h2>Mon contact : </h2>
                <p>{this.state.nom} , {this.state.prenom} , {this.state.telephone}</p>
                <Adresse rue={"Rue parmentier"} ville={"Lille"} codepostal={"59000"}/>
            </div>
        );
    }
}

export default Contact;
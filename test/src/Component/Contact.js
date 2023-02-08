import { Component } from "react";

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
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Contact;
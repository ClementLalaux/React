import { Component } from "react";


class Adresse extends Component{
    constructor(props){
        super(props);
        this.state = {
            rue : props.rue,
            ville : props.ville,
            codepostal : props.codepostal,
        };
    }

    render(){
        return(
            <div>
                <h2>Mon adresse : </h2>
                <p>{this.state.rue} , {this.state.ville} {this.state.codepostal}</p>
            </div>
        );
    }
}

export default Adresse;
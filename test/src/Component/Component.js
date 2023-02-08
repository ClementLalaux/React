import { Component } from "react";

export function FirstComponent(){
    return(
        <div>
            <h1>Mon premier component</h1>
        </div>
    );
}

class DeuxiemeComponent extends Component{
    constructor(props){
        super(props);
        this.state = {message : props.message};
    }

    render(){
        return(
            <header>
                <h2>Second component</h2>
                <p>{this.state.message}</p>
            </header>
        );
    }
}

export default DeuxiemeComponent;
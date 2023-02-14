import { Component } from "react"

export class AjoutClient extends Component{
    constructor(props){
        super(props);
        this.state = {
            client: {
                firstName: "",
                lastName: "",
                phone:"",
                status:true,
                address : {
                    street : "",
                    postCode : "",
                    city : ""
                }
            }
        }
    }

    submitForm = (e) => {
        e.preventDefault();
        const client = {...this.state.client};
        this.setState({client :{
            firstName: "",
            lastName: "",
            phone:"",
            status:true,
            address : {
                street : "",
                postCode : "",
                city : ""
            }
        }})
        e.target.reset();
        this.props.addClient(client);
    }

    changementValue = (e) => {
        const tmpClient = {...this.state.client};
        if(e.target.name == "address"){
            tmpClient.address[e.target.dataset.name] = e.target.value;
        } else {
            tmpClient[e.target.name] = e.target.value;
        }
        this.setState({client : {...tmpClient}});
    }

    render(){
        return(
            <form onSubmit={this.submitForm}>
                <div>
                    <label htmlFor='firstName'>Prénom : </label>
                    <input type="text" onChange={this.changementValue} name="firstName"></input>
                </div>
                <div>
                    <label htmlFor='lastName'>Nom : </label>
                    <input type="text" onChange={this.changementValue} name="lastName"></input>
                </div>
                <div>
                    <label htmlFor='phone'>Telephone : </label>
                    <input type="text" onChange={this.changementValue} name="phone"></input>
                </div>
                <div>
                    <label htmlFor='city'>Ville : </label>
                    <input type="text" onChange={this.changementValue} name="address" data-name="city"></input>
                </div>
                <div>
                    <label htmlFor='postCode'>Code Postal : </label>
                    <input type="text" onChange={this.changementValue} name="address" data-name="postCode"></input>
                </div>
                <div>
                    <label htmlFor='street'>Rue : </label>
                    <input type="text" onChange={this.changementValue} name="address" data-name="street"></input>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        )
    }}

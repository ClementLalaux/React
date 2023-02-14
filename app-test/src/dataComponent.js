import { Component } from "react"
import Adresse from "./Components/Adresse"
import { getInfoPokeApi } from "./Components/data.service"

export class DataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        getInfoPokeApi().then(data => {
            this.setState({ data : data})
            console.log(this.state.data)
        })
    }


    render(){
        return(
            <div>
            <h3>Clients : </h3>
                <table className='table-produits'>
                    <thead>
                        <tr>
                            <th >Prenom</th>
                            <th >Nom</th>
                            <th>Téléphone</th>
                            <th>Adresse</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((client,i) => (<tr><td>{client.firstName}</td><td>{client.lastName}</td><td>{client.phone}</td><td><Adresse adresse={client.address}></Adresse></td></tr>))}
                    </tbody>
                </table>
            </div>
        )
    }
}
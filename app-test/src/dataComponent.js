import { Component } from "react"
import Adresse from "./Components/Adresse"
import { getInfoClientsApi } from "./Components/data.service"

export class DataComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount(){
        getInfoClientsApi().then(data => {
            this.setState({ data : data})
        })
    }

    changerStatut = (e) => {     
        const tmpStatut = [...this.state.data];
        tmpStatut[e.target.dataset.value-1].status = !tmpStatut[e.target.dataset.value-1].status;
        this.setState({data : tmpStatut});
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
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.data.map((client) => (
                        <tr key={client.id}>
                            <td>{client.firstName}</td>
                            <td>{client.lastName}</td>
                            <td>{client.phone}</td>
                            <td><Adresse adresse={client.address}></Adresse></td>
                            <td className={client.status ? "statut-vrai" : "statut-faux"}>{client.status ? "True" : "False"}</td>
                            <td><button data-value={client.id}onClick={this.changerStatut}>Changer le statut</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
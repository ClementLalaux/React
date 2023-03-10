import axios from "axios";

const urlapi ="http://localhost:8080/clients";

export const getInfoClientsApi = () => new Promise((resolve,reject) => {
    return axios.get(urlapi).then((response) =>{
        resolve(response.data);
    });
})
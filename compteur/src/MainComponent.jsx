import { useState } from "react";
import AfficheComponent from "./components/AfficheComponent";
import FormComponent from "./components/FormComponent"

const MainComponent = () => {

    const [tableauCompteur,setTableauCompteur] = useState([]);

    const addTimer = (timer) => {
        setTableauCompteur((previousTime) => [...previousTime,timer]);
    }


    return (
        <>
            <div className="row">
                <h1>
                    Main Component
                </h1>
                <hr />
                <div className="mb-3">
                    <FormComponent addTimer={addTimer} tableauCompteur={tableauCompteur}></FormComponent> 
                </div>

                <div className="mb-5">
                    {tableauCompteur.map((c,i) => (<AfficheComponent key={i} compteur={c}></AfficheComponent>))}
                </div>
            </div>
        </>
    )
}

export default MainComponent
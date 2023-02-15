import { useEffect,useState } from "react"

const AfficheComponent = (props) => {

    const [count, setCount] = useState(props.compteur.temps);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count+1);
            console.log(count)
        },1000)
        return () => {
            if(interval){
                clearInterval(interval);
                interval = undefined;
            }
        }
    }, [count])

    return(
        <div>
            <h5>Compteur n°{props.compteur.id}</h5>
            <p>Commence à : {props.compteur.temps} et est actuellement à {count}</p>
        </div>
    )
}

export default AfficheComponent;
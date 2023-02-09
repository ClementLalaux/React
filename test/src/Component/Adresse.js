export function Adresse(props){
        const {rue, ville, cp} = props.adresse
        return(
            <div>
                Rue : {rue}, Ville : {ville}, Code Postal : {cp}
            </div>
        )
}
const ContactDisplay = (props) => {
    const contact = props.contact

    return (
        <div className="border border-info rounded p-3 my-2">
            <div className="d-flex align-item-center mb-4">
                <div className="col-4 align-self-center justify-self-center">
                    <img className="img-fluid" src={contact.newAvatarRefValue}></img>
                </div>
                <div className="col-8 align-self-center mx-3">
                    <h5>{contact.newNomRefValue} {contact.newPrenomRefValue}</h5>
                    <ul>
                        <li>
                            Date de naissance : {contact.newDateDeNaissanceRefValue}
                        </li>
                        <li>
                            Age : {contact.newAgeRefValue}
                        </li>
                        <li>
                            Email : {contact.newEmailRefValue}
                        </li>
                        <li>
                            Telephone : {contact.newTelephoneRefValue}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-danger" onClick={() => props.deleteContact(contact.id)}>Supprimer</button>
            </div>
        </div>
    )
}

export default ContactDisplay
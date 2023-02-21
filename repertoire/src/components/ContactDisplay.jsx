const ContactDisplay = (props) => {
    const contact = props.contact

    return (
        <div className="border border-info rounded p-3 my-2">
            <div className="d-flex align-item-center">
                <div className="col-4 align-self-center justify-self-center">
                    <img src={contact.newAvatarRefValue}></img>
                </div>
                <div className="col-8 ">
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
        </div>
    )
}

export default ContactDisplay
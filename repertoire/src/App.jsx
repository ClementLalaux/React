import './App.css';
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ModalComponentConnection from './modals/ModalComponentConnection'
import ModalComponentAjout from './modals/ModalComponentAjout'
import API_KEY from "./components/apiKey"
import ContactDisplay from './components/ContactDisplay';

function App() {

  const BASE_DB_URL = "https://m2i-auth-demo-lalaux-default-rtdb.europe-west1.firebasedatabase.app/"

  const [modalVisible, setModalVisible] = useState(false)
  const [modalAjoutVisible, setModalAjoutVisible] = useState(false)
  const [isLogging, setIsLogging] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

  const [contacts, setContacts] = useState([])

  const emailRef = useRef()
  const passwordRef = useRef()
  
  const newPrenomRef = useRef();
  const newNomRef = useRef();
  const newDateDeNaissanceRef = useRef();
  const newAgeRef = useRef();
  const newEmailRef = useRef();
  const newTelephoneRef = useRef();
  const newAvatarRef = useRef();

  const submitFormHandlerContact = (event) => {

    event.preventDefault()

    const newPrenomRefValue = newPrenomRef.current.value;
    const newNomRefValue = newNomRef.current.value;
    const newDateDeNaissanceRefValue = newDateDeNaissanceRef.current.value;
    const newAgeRefValue = newAgeRef.current.value;
    const newEmailRefValue = newEmailRef.current.value;
    const newTelephoneRefValue = newTelephoneRef.current.value;
    const newAvatarRefValue = newAvatarRef.current.value;

    const newContact = {
      newPrenomRefValue,
      newNomRefValue,
      newDateDeNaissanceRefValue,
      newAgeRefValue,
      newEmailRefValue,
      newTelephoneRefValue,
      newAvatarRefValue
    }

    newPrenomRef.current.value = ""
    newNomRef.current.value = ""
    newDateDeNaissanceRef.current.value = ""
    newAgeRef.current.value = ""
    newEmailRef.current.value = ""
    newTelephoneRef.current.value = ""
    newAvatarRef.current.value = ""

    addContact(newContact);
    setModalAjoutVisible(true);
    }

  const logOutHandler = () => {
    localStorage.removeItem('token')
    setIsLogged(false)
  }

  const connection = () => {
    setModalVisible(true);
    setIsLogging(true);
  }

  const inscription = () => {
    setModalVisible(true);
    setIsLogging(false);
  }


  const submitFormHandler = async (event) => {
    event.preventDefault()

    let BASE_URL = ""

    if (isLogging) {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

    } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    }

    try {

      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true
        })
      })

      if (!response.ok) {
        throw new Error("Il y a eu une erreur !")
      }

      const data = await response.json()
      localStorage.setItem('token', data.idToken)

      emailRef.current.value = ""
      passwordRef.current.value = ""

      setIsLogged(true)
      setModalVisible(false)
    } catch (error) {
      console.error(error.message);
    }
  }


  const addContact = async (contact) => {
    console.log(contact)
    try {
      const token = localStorage.getItem('token')
      if (token) {
        const response = await fetch(`${BASE_DB_URL}contacts.json?auth=${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        })

        if (!response.ok) {
          throw new Error("Il y a eu un problème !")
        }

        const data = await response.json()
        setContacts([...contacts, { id: data.name, ...contact }])
        console.log(contacts)
        refreshContacts()

      }
    } catch (error) {
      console.error(error.message);
    }
  }

  const refreshContacts = async () => {
    try {
      const response = await fetch(`${BASE_DB_URL}contacts.json`)

      if (!response.ok) {
        throw new Error("Il y a eu une erreur lors de la requête GET !")
      }

      const data = await response.json()

      const tmpContacts = []
      for (const key in data) {
        tmpContacts.push({ id: key, ...data[key] })
      }
      setContacts(tmpContacts)

    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    refreshContacts()
  }, [contacts])

  const deleteContact = async (contactId) => {

    if(window.confirm("Etes-vous sûr ?")) {
      const contactSupprimer = contacts.find(contact => contact.id === contactId)
      if (contactSupprimer) {
        try {
          const token = localStorage.getItem('token')
          if (token) {
            const response = await fetch(`${BASE_DB_URL}contacts/${contactId}.json?auth=${token}`, {
              method: "DELETE"
            })
  
            if (!response.ok) {
              throw new Error("Erreur lors de la requête DELETE !")
            }
  
            setContacts([...contacts.filter(contact => contact !== contactId)])
          }
        } catch (error) {
          console.error(error.message);
        }
      } 
    } 
  }



  return (
    <>
      {modalAjoutVisible && createPortal(<ModalComponentAjout closeModal={() => setModalAjoutVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
          <h3>Ajouter contact</h3>
          <button onClick={() => setModalAjoutVisible(false)} className="btn btn-outline-dark rounded-circle"><i className="bi bi-x"></i></button>
        </div>
        <hr />
        <form onSubmit={submitFormHandlerContact}>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prénom : </label>
            <input type="text" required ref={newPrenomRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom : </label>
            <input type="text" required ref={newNomRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">Date de naissance : </label>
            <input type="date" required ref={newDateDeNaissanceRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age : </label>
            <input type="number" required ref={newAgeRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="mail" className="form-label">Adresse mail : </label>
            <input type="text" required ref={newEmailRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="telephone" className="form-label">Téléphone : </label>
            <input type="text" required ref={newTelephoneRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="avatar" className="form-label">Avatar : </label>
            <input type="text" required ref={newAvatarRef} className="form-control" />
          </div>
          <div className="text-end">
            <button className="btn btn-primary">Ajouter contact</button>
          </div>
        </form>
      </ModalComponentAjout>, document.getElementById("modal-ajout-root"))}

      {modalVisible && createPortal(<ModalComponentConnection closeModal={() => setModalVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
          <h3>{isLogging ? 'Sign In' : 'Sign Up'}</h3>
          <button onClick={() => setModalVisible(false)} className="btn btn-outline-dark rounded-circle"><i className="bi bi-x"></i></button>
        </div>
        <hr />
        <form onSubmit={submitFormHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="text" required ref={emailRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password : </label>
            <input type="password" required ref={passwordRef} className="form-control" />
          </div>
          <div className="text-end">
            <button type="button" className="btn btn-outline-info me-2" onClick={() => setIsLogging(!isLogging)}>Switch to {isLogging ? 'Sign Up' : 'Sign In'}</button>
            <button className="btn btn-primary">{isLogging ? 'Sign In' : 'Sign Up'}</button>
          </div>
        </form>
      </ModalComponentConnection>, document.getElementById("modal-root"))}
      <div className="App" >
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-between">
            <div >
              <p className="navbar-brand">Navbar</p>
            </div>
            <div>
              { !isLogged ? <button className="btn btn-primary" onClick={() => connection()}>Connection</button> : null}
              <button className="btn btn-primary mx-1" onClick={() => isLogged ? logOutHandler() : inscription()}>{isLogged ? 'Log Out' : 'Inscription'}</button>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row g-2 py-3">
            <div className="col-12">
              <div className="bg-dark text-light rounded p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <h1>Contact</h1>
                  <button className="btn btn-primary" onClick={() => isLogged ? setModalAjoutVisible(true) : console.log(isLogged)}>Ajouter</button>
                </div>
                <hr />
                {contacts.length === 0 || !isLogged ? 
                <p>Il n'y a pas de contacts</p> :
                contacts.map(c => <ContactDisplay key={c.id} contact={c} deleteContact={deleteContact}></ContactDisplay>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;

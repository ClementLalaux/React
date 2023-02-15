import { useRef } from "react";

const FormComponent = (props) => {

    const timerRef = useRef()

    const formSubmit = (e) => {
        e.preventDefault();
        const newTimer = {id : props.tableauCompteur.length+1,
        temps :  +timerRef.current.value
        }
        props.addTimer(newTimer);
    }

    return (
        <>
            <h2>Counter : </h2>
            <hr />
            <form onSubmit={formSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Start Value : </label>
                    <input type="number" className="form-control" id="inputTemp" ref={timerRef}  />
                </div>

                <button type="submit" className="btn btn-primary">Add a counter</button>
            </form>
        </>
    )
}

export default FormComponent;
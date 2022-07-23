import React from "react";
import { BsSpeedometer } from 'react-icons/bs';

const Pressure = (props) => {

    return (
        <>
        <div className="col-md-4">
            <div className="card text-start" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Pressure</h6>
                    <h1 className="card-title">{props.pressure} <BsSpeedometer /></h1>
                </div>
            </div>
        </div>
    </>
    )
}
export default Pressure;
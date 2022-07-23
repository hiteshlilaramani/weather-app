import React from "react";
import { FaTemperatureHigh } from 'react-icons/fa';

const Temperature = (props) => {

    return (
        <>
            <div className="col-md-4">
                <div className="card text-start" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Temperature</h6>
                        <h1 className="card-title">
                            {props.temp} <FaTemperatureHigh /></h1>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Temperature;
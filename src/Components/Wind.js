import React from "react";
import { BiWind } from 'react-icons/bi';

const Wind = (props) => {

    return (
        <>
        <div className="col-md-4">
            <div className="card text-start" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Wind</h6>
                    <h1 className="card-title">{props.wind}km/h <BiWind /></h1>
                </div>
            </div>
        </div>
    </>
    )
}
export default Wind;
import React from "react";
import { TiWeatherSnow } from 'react-icons/ti';

const Weather = (props) => {

    return (
        <>
        <div className="col-md-4">
            <div className="card text-start" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Weather</h6>
                    <h1 className="card-title">{props.weather} <TiWeatherSnow /></h1>
                </div>
            </div>
        </div>
    </>
    )
}
export default Weather;
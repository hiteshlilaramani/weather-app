import React, { useEffect, useState } from "react";
import { WiHumidity } from 'react-icons/wi';
import Pressure from "./Pressure";
import Temperature from "./Temperature";
import Visibility from "./Visiblity";
import Weather from "./Weather";
import Wind from "./Wind";
import Coordinate from "./Coordinate";




const Humidity = (props) => {

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.search}&units=metric&appid=bb95a2de7d590fac7f2f57f7adc4fd3a`)
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=Pune&units=metric&appid=bb95a2de7d590fac7f2f57f7adc4fd3a`)
        .then((response) => response.json())
        .then(response => {
            setData(response)
            // console.log(response);
        })
    } , [props.search])

    return (
        <>
            <div className="col-md-4">
                <div className="card text-start" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Humidity</h6>
                        <h1 className="card-title">
                        { data?.main?.humidity > 0 ? data?.main?.humidity : 'Not Found'}
                            <WiHumidity /></h1>
                    </div>
                </div>
            </div>
        <Temperature temp = {data?.main?.temp}/>
        <Weather weather = {data?.weather?.[0].main}/>
        <Wind wind = {data?.wind?.speed}/>
        <Pressure pressure = {data?.main?.pressure}/>
        <Visibility visibility = {data?.visibility}/>
        <Coordinate coordinate = {data?.coord}/>
        </>
    )
    
}
export default Humidity;
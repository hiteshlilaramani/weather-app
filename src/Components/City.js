import React, { useEffect, useState } from "react";
import { FaCity } from 'react-icons/fa';

const City = (props) => {

    const [data , setData] = useState({})
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.search}&units=metric&appid=bb95a2de7d590fac7f2f57f7adc4fd3a`)
        .then((response) => response.json())
        .then(response => {
            setData(response)
            // console.log(response);
        })
    } , [props.search])
    
    console.log(data);

  
    return (
        <>
            <div className="col-md-4">
                <div className="card text-start" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">city</h6>
                        <h1 className="card-title">{data?.name} <FaCity /></h1>                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default City;
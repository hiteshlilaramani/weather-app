import React from "react";
import {FaMapMarkedAlt} from 'react-icons/fa';

const Coordinate = (props) => {
     const {coordinate} = props;
    return (
        <>
            <div className="col-md-4">
                <div className="card text-start" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Coordinate</h6>
                        <h5 className="card-title" style={{fontWeight:'800'}}>
                        lat: { coordinate?.lat > 0 ?  coordinate?.lat : 'Not Found'} | lon: { coordinate?.lon > 0 ?  coordinate?.lon : 'Not Found'}
                         </h5>
                        <h1 className="card-title"><FaMapMarkedAlt /></h1>  
                    </div>
                </div>
            </div>
        </>
    )
}
export default Coordinate;
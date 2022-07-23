import React from "react";
import { MdVisibility } from 'react-icons/md';

const Visibility = (props) => {

    return (
        <>
        <div className="col-md-4">
            <div className="card text-start" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Visibility</h6>
                    <h1 className="card-title">{props.visibility} <MdVisibility /></h1>
                </div>
            </div>
        </div>
    </>
    )
}
export default Visibility;
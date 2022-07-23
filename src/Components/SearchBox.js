import React, { useState } from "react";
import City from './City';
import Humidity from "./Humidity";

const SearchBox = () => {

    const [city, setCity] = useState('');
    const [display, setDisplay] = useState('Jaipur')


    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setDisplay(city);
        // setCity('')
    };

    return (
        <>
            <div className="searchBg" style={{position:"relative" , overflow:"hidden" , zIndex:"100"}} >
                <div className="container my-5">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search City" aria-label="Search"
                            name="city"
                            value={city}
                            onChange={e => handleChange(e)} />

                        <button className="btn btn-outline-success btn-lg"
                            type="submit"
                            onClick={handleSubmit}
                        >Search</button>
                    </form>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row '>
                    <City search={display} />
                    <Humidity search={display} />
                </div>
            </div>

        </>
    )
}
export default SearchBox;
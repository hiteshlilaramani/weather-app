import React from "react";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light" style={{position:"relative" , overflow:"hidden" , zIndex:"100"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Weather App</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default NavBar;
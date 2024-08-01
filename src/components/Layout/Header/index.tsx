

import { useState, useContext, memo } from "react";


import { AIMContext } from "../../../contexts/iam";
import { NavLink, useNavigate } from "react-router-dom";



const Header = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const {iam } = useContext<any>(AIMContext)
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/sign-in")
    }
    

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <span className="navbar-brand mb-0 h1">RFE204</span>
                    <div className="collapse navbar-collapse">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to={"/users/"}>Users</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <button onClick={() => setIsDropdownOpen(prev => !prev)} className={`nav-link dropdown-toggle ${isDropdownOpen ? "show" : ""}`} id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {iam?.name}
                                </button>
                                <ul className={`dropdown-menu dropdown-menu-end ${isDropdownOpen ? "show" : ""}`} aria-labelledby="profileDropdown">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}


export default memo(Header)
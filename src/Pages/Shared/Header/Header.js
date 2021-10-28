import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { users, logOut } = useAuth();

    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    {
                        !users.email ?
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                            </>
                            :
                            <>

                                <li>
                                    <Link to="/admin">Name:{users.displayName}</Link>
                                </li>
                                <li>
                                    <button onClick={logOut} className="">Sign out</button>
                                </li>
                            </>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Header;
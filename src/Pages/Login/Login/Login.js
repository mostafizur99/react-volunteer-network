import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [error, setError] = useState('');
    const {
        signInUsingGoogle
        // signInUsingFacebook,
        // handleEmailChange,
        // handlePasswordChange,
        // handleLogIn,
        // handleResetPassword
    } = useAuth();



    // Google login-btn-handler 
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {

            })
            .catch(error => {
                setError(error.message);
            })
    }



    return (
        <div>
            <h2>Login page</h2>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <div className="">{error}</div>
        </div>
    );
};

export default Login;
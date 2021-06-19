import React from 'react'
import Login from '../../components/Login/Login'
import NavBar from '../../components/NavBar/NavBar'
import Foot from '../../components/Foot/Foot'
import './Login.css'
function LoginPage() {
    return (
        <div className="login-page">
            <NavBar/>
            <Login/>
            <Foot/>
        </div>
    )
}

export default LoginPage

import React from 'react'
import Login from '../../components/Login/Login'
import NavBar from '../../components/NavBar/NavBar'
import Foot from '../../components/Foot/Foot'
import NavbarSimple from '../../components/NavbarSimple/NavbarSimple'
import './Login.css'
function LoginPage() {
    return (
        <div className="login-page">
            <NavbarSimple/>
            <Login/>
            <Foot/>
        </div>
    )
}

export default LoginPage

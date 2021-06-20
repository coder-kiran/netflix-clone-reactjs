import React from 'react'
import SignUp from '../../components/SignUp/SignUp'
import Navbar from '../../components/NavBar/NavBar'
import Foot from '../../components/Foot/Foot'
import './Signup.css'
import NavbarSimple from '../../components/NavbarSimple/NavbarSimple'
function SignupPage() {
    return (
        <div className="signup-page">
           <NavbarSimple/>
            <SignUp/>
            <Foot/>
        </div>
    )
}

export default SignupPage

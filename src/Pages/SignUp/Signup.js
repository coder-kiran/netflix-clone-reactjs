import React from 'react'
import SignUp from '../../components/SignUp/SignUp'
import Navbar from '../../components/NavBar/NavBar'
import Foot from '../../components/Foot/Foot'
import './Signup.css'
function SignupPage() {
    return (
        <div className="signup-page">
           
            <SignUp/>
            <Foot/>
        </div>
    )
}

export default SignupPage

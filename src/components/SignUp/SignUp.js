import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
import './SignUp.css'
import { Firebase } from '../../firebase/firebase'
import { useLocation } from "react-router-dom";


function SignUp() {

    const history = useHistory()
    const location = useLocation();
    const myparam = location.email

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleSignUp =(e) =>{
        e.preventDefault()
       
        Firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
            result.user.updateProfile({displayName:username}).then(()=>{
                Firebase.firestore().collection('users').add({
                    username,
                    phone,
                    id:result.user.uid
                })
            }).catch((err)=>{console.log("error in add firestore",err)})
        }).then(()=>{
            history.push('/login')
        })

    }

    return (
        <div className="signup-parent">
            <div className="signup-rectangle">
                <div className="signup-header">
                <h2>Sign Up</h2>
                </div>
                <h1>Hello{myparam}</h1>
                               
                <form>
                    <div className="signup-input">
                        
                      
                        <input type="text"
                         name="username"
                          placeholder="your name"
                          onChange={handleUsername}
                          value={username}
                           />
                       

                      
                        <input 
                        type="email"
                         placeholder="email"
                         onChange={handleEmail}
                          value={email}
                         />
                       


                         
                        <input 
                        type="password"
                         placeholder="password"
                         onChange={handlePassword}
                          value={password}
                          />
                       

                       
                        <input
                         type="text" 
                         placeholder="phone number"
                         onChange={handlePhone}
                          value={phone}
                          />

                        <button onClick={handleSignUp}>Sign Up </button>
                       
                    </div>
                    <div className="signup-footer">
                        <p>Already have a Netflix account ? <Link to='/login' style={{ textDecoration: 'none' }}>Sign in</Link>  now.</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

import React,{useState} from 'react'
import './Login.css'
import { Firebase} from '../../firebase/firebase'
import {useHistory} from 'react-router-dom'
function Login() {
    
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = (e) =>{
      
        e.preventDefault()
        console.log("email heloooo");
        Firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            history.push('/home')
        })

    }

    return (
        <div className="login-parent">
                <div className="login-rectangle">
                <div className="login-header">
                <h2>Sign In</h2>
                </div>
               
                <form  onSubmit={handleSignIn}>
                    <div className="login-input">                    
                      
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

                       
                    <button>Sign In </button>
                       
                    </div>
                    <div className="signup-footer">
                        <p>New to Netflix? Sign up now.</p>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login

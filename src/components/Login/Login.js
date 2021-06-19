import React,{useState} from 'react'
import './Login.css'
function Login() {

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

    }

    return (
        <div className="login-parent">
                <div className="login-rectangle">
                <div className="login-header">
                <h2>Sign In</h2>
                </div>
               
                <form>
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

                       
                    <button onClick={handleSignIn}>Sign In </button>
                       
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

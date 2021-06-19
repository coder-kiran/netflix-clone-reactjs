import React,{useState} from 'react'
import './SignUp.css'
function SignUp() {
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
    }

    return (
        <div className="signup-parent">
            <div className="signup-rectangle">
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
                        <p>I Am footer</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp

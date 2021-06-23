import React, { useEffect, useState } from 'react';
import './NavBar.css';
import { Firebase } from '../../firebase/firebase'
import {useHistory} from 'react-router-dom'
function NavBar({ user }) {

    const history = useHistory()

    const [navshow, setNavShow] = useState(false)


    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setNavShow(true)
            } else {
                setNavShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll",null)
        }
    }, [])

    console.log("USER",user);
    return (
        <div className={`navbarr-home ${navshow && "nav-black"}`} >
            <div className="netflixlogo">
                 <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" /> 
            </div>
            

            <div className="navbar-right">
                <div className="username"> 
                     <h4>{user ? user.displayName : "I know you.."}</h4> 
                 </div> 
                 <div className="user-avatar"> 
                   <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" /> 
                 </div> 
                <div className="signout"> 
                    <button onClick={()=>{
                        Firebase.auth().signOut().then(()=>{
                            history.push('/login')
                        })
                    }}>Sign Out</button> 
                 </div> 
            </div>


             
          
        </div>
    )
}

export default NavBar;

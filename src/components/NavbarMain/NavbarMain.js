import React, { useEffect, useState } from 'react';
import   './NavbarMain.css'
import {Firebase} from '../../firebase/firebase'
import {useHistory} from 'react-router-dom'
function NavbarMain() {
    const history = useHistory()
    const [navshow, setNavShow] = useState(false)
   
   
    useEffect(() => {
      
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                setNavShow(true)
            }else{
                setNavShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll",null)
        }
    }, [])

  
    return (
        <div className={`navbarr ${navshow && "nav-black"}`} >
           
            <img className="navbarMain-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            
            <button onClick={()=>{
                history.push('/login')
            }} className="signIn">Sign In</button>
           
        </div>
    )
}

export default NavbarMain;

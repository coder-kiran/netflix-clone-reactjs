import React, { useEffect, useState } from 'react';
import './NavBar.css';

function NavBar() {
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
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className={`navbarr ${navshow && "nav-black"}`} >
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            <img className="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />
        </div>
    )
}

export default NavBar;

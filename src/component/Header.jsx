import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import MenuBurger from './MenuBurger'

function Header() {
    const[menuOpen,setMenuOpen] = useState(false);
  const closeMenu = () =>{
    setMenuOpen(false);
  };
  useEffect(()=>{
    document.body.style.overflow=menuOpen ?"hidden":"auto";
  },[menuOpen]);
  return (
    <header className='head-container'>
        <nav className='nav-container'>
            <div className='logo-container' >
                <Link ><h3 className='chuks'>Chuks Kitchen</h3></Link>
                {menuOpen &&( <div className='overlay' onClick={closeMenu}></div> )}
            </div>
            <ul className='pages-container'>
                <Link className='pages-container1' to="/">Home</Link>
                <Link className='pages-container1' to="/explore">Explore</Link>
                <Link className='pages-container1' to="/order">Order</Link>
                <Link className='pages-container1' to="/account">Account</Link>
            </ul>
            <Link className='pages-container2'>
               <Link className='pages-container2' to="/login">Login</Link>
            </Link>
            <div className='burger' onClick={()=> setMenuOpen(true)}>
              <img src="/menu-burger.png" alt="" />
              </div>
        </nav>
         <MenuBurger menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    </header>
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'


function MenuBurger({menuOpen,setMenuOpen}) {
    if(!menuOpen) return null;
  return (
    <div className='menuBurger ${menuOpen ? "open" :""}'>
      <button className='exit-btn'
      onClick={()=> setMenuOpen(false)}>
        <div ><img id='imageexist' src="/exist.png" alt="" /></div>

      </button>
      <Link className='pages-container11' to="/">Home</Link>
      <Link className='pages-container11' to="/explore">Explore</Link>
      <Link className='pages-container11' to="/order">Order</Link>
      <Link className='pages-container11' to="/account">Account</Link>
      <Link className='pages-container21' to="/login">Login</Link>
                
    </div>
  );
}

export default MenuBurger
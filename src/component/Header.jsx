import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='head-container'>
        <nav className='nav-container'>
            <div className='logo-container' >
                <Link><h3 className='chuks'>Chuks Kitchen</h3></Link>
            </div>
            <ul className='pages-container'>
                <Link className='pages-container1' to="/">Home</Link>
                <Link className='pages-container1' to="/explore">Explore</Link>
                <Link className='pages-container1' to="/order">Order</Link>
                <Link className='pages-container1' to="/">Account</Link>
            </ul>
            <Link className='pages-container2'>
               <Link className='pages-container2' to="/login">Login</Link>
            </Link>
        </nav>
    </header>
  )
}

export default Header
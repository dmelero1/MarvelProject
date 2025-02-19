import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <nav className='bg-amber-500'>
    <Link to="/"><h1 className="text-3xl">Parques Nacionales</h1></Link>
    <ul>
        <li><NavLink to="comunidades">Comunidades</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
    </ul>
    </nav>
  )
}

export default Header

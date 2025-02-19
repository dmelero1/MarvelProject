import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <header className="bg-red-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <img src="app\components\Header\ImgHeader\Marvel_Logo.png" alt="Marvel" width="10%"></img>
        </Link>
        <nav className="flex gap-6 text-lg">
          <Link to="/characters" className="hover:text-gray-300">
            Personajes
          </Link>
          <Link to="/comics" className="hover:text-gray-300">
            Cómics
          </Link>
          <Link to="/events" className="hover:text-gray-300">
            Eventos
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


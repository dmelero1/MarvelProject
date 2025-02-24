import React from 'react'
import { Link, NavLink } from 'react-router'

function Header() {
  return (
    <header className="bg-red-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-wide">
          <img src="app\components\Header\ImgHeader\Marvel_Logo.png" alt="Marvel" width="13%"></img>
        </Link>
        <nav className="flex gap-5 text-lg">
          <Link to="characters" className="px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800">
            Characters
          </Link>
          <Link to="comics" className="px-4 py-2 rounded-lg transition duration-300 hover:bg-red-800">
            Comics
          </Link>
          <Link to="series" className="whitespace-nowrap px-3 py-2 rounded-lg transition duration-300 hover:bg-red-800">
            Series
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


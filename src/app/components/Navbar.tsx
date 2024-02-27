import React from 'react';

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 text-primary-content fixed z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Rajat Mehta</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#achievements">Achivements</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

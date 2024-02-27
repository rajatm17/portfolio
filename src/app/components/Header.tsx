// full code link
'use client';

import { useState } from 'react'; // import state

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-center justify-between  border-gray-400 py-1 bg-base-300 ">
      <a className="btn btn-ghost text-xl ml-10">Rajat Mehta</a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 mr-10"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] bg-base-300 w-screen sticky top-0 z-50">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a
                  href="http://drive.google.com/file/d/1q-46QEn4e6uVSy9AJe-B0uHCC42vBkMK/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#about">About</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#projects">Projects</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#achievements">Achievements</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex bg-base-300 mr-10">
          <li className="my-5 btn btn-ghost">
            <a
              href="http://drive.google.com/file/d/1q-46QEn4e6uVSy9AJe-B0uHCC42vBkMK/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
          <li className=" my-5 btn btn-ghost">
            <a href="#about">About</a>
          </li>
          <li className="my-5 btn btn-ghost">
            <a href="#projects">Projects</a>
          </li>
          <li className="my-5 btn btn-ghost">
            <a href="#achievements">Achievements</a>
          </li>
          <li className="my-5 btn btn-ghost">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}

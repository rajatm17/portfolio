import Image from 'next/image';
import Navbar from './components/Navbar';
import React from 'react';
import { cn } from '@/utils/cn';
import { Spotlight } from '../app/components/ui/Spotlight';
import { projects } from '@/app/utils/projects';
import { HoverEffect } from '@/app/components/ui/card-hover-effect';
import Header from './components/Header';

const words = [
  {
    text: 'Full',
  },
  {
    text: 'Stack',
  },
  {
    text: 'Developer',
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <section id="about">
        <div className="h-screen w-full rounded-md flex items-center md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
          <div className=" p-4 max-w-7xl  mx-auto relative   w-full pt-20 md:pt-0 ">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Full Stack Developer.
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              My name is Rajat Mehta and I am currently pursuing B.Tech from
              National Institute of Technology Kurukshetra. I am a Full Stack
              Developer experienced in Technologies like React, Nextjs, Node.js
              etc.Scroll Below to know more. Have a nice day!
            </p>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="h-auto justify-center bg-primary pb-12 items-center pt-2"
      >
        <h1 className="text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-10">
          PROJECTS
        </h1>
        <HoverEffect items={projects} />
      </section>
      <section
        id="achievements"
        className="h-screen justify-center items-center "
      >
        <div className="h-auto mx-auto items-center justify-center ">
          <h1 className="text-xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mt-10">
            ACHIEVEMENTS
            <ul className="mt-20 list-outside text-left list-disc max-w space-y-1 text-gray-500  dark:text-gray-400 ml-20 mr-10">
              <li>
                Achieved Rating of{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1157
                </span>{' '}
                on Codeforces in one month.
              </li>
              <br />

              <li>
                Solved{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  400+ problems
                </span>
                on Coding platforms like Leetcode, Codeforces, Codechef etc.
              </li>

              <br />
              <li>
                Achieved Rating of{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1411
                </span>{' '}
                on Leetcode.
              </li>
              <br />
              <li>
                Earned Silver medal in the I.T.U.S.A Football tournament with
                remarkable football skills and outstanding teamwork.
              </li>
              <br />
              <li>
                Successfully Managed (accomodation, Leaderboard) I.T.U.S.A
                Volleyball Tournament held in our institute.
              </li>
            </ul>
          </h1>
        </div>
      </section>
      <section id="contact" className="h-auto  justify-center bg-primary ">
        <footer className="footer p-10 bg-primary text-neutral-content">
          <aside>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              Rajat Mehta.
              <br />
              +91 9205518381
            </p>
          </aside>
          <nav>
            <h6 className="footer-title">Contact</h6>
            <div className="grid grid-flow-col gap-4">
              <a href="https://github.com/rajatm17" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rajatmehta17702/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  className="fill-current"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>{' '}
                </svg>
              </a>
              <a href="mailto:iamrajat17702@gmail.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  ></path>
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  ></path>
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  ></polygon>
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  ></path>
                </svg>
              </a>
              <a href="https://codeforces.com/profile/rrajjo" target="_blank">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5A1.5 1.5 0 0 1 15 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5A1.5 1.5 0 0 1 24 12v7.5a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5V12a1.5 1.5 0 0 1 1.5-1.5h3z" />
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </section>
    </div>
  );
}

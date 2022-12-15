import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar_start'>

      <nav className="navbar navbar-expand-lg  p-4">
        <div className="container-fluid">
          <span className="navbar-brand">
            <svg width="35" height="53" viewBox="0 0 75 83" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3H35C57.0914 3 75 20.9086 75 43C75 65.0914 57.0914 83 35 83H21V3Z" fill="url(#paint0_linear_3_9)" />
              <path d="M39 31H45C51.6274 31 57 36.3726 57 43C57 49.6274 51.6274 55 45 55H39V31Z" fill="#210A2F" />
              <g filter="url(#filter0_f_3_9)">
                <rect x="16" y="16" width="15" height="49" fill="#7534FF" />
              </g>
              <rect y="3" width="23" height="80" fill="url(#paint1_linear_3_9)" />
              <defs>
                <filter id="filter0_f_3_9" x="0" y="0" width="47" height="81" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="8" result="effect1_foregroundBlur_3_9" />
                </filter>
                <linearGradient id="paint0_linear_3_9" x1="4" y1="43" x2="72.4944" y2="91.9662" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7534FF" />
                  <stop offset="1" stopColor="#F7A7A1" />
                </linearGradient>
                <linearGradient id="paint1_linear_3_9" x1="0" y1="43" x2="37" y2="59.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F6A2A9" />
                  <stop offset="1" stopColor="#BD52FF" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">

              <li className="nav-item">
                <span>Home</span>
              </li>

              <li className="nav-item">
                <span className="nav-link">About</span>
              </li>
            </ul>
          </div>
          <span className="btn btn-outline-primary"> contact</span>

        </div>
      </nav>

    </div>
  )
}

export default Navbar

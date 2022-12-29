import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {Fabars, Fatimes} from 'react-icons/fa'

export const Navbar = () => {
    const[nav, setNav] = useState(false)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-white'>
        <div>
            <img src={Logo} alt="Logo image" style={{width: '50px'}}></img>
        </div>
        {/*menu */}
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='hidden'>
            <Fabars />
        </div>
        <ul className='absolute'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
        </ul>
        <div></div>

    </div>
  )
}

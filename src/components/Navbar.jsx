import React from 'react'
import logo from '../assets/kevinRushLogo.png';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-2 flex items-center justify-between py-6 px-4'>
      <div className='flex flex-shrink items-center'>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-sm">
          Raviraj
        </h2>
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl text-gray-700">
        <FaGithub className="hover:text-black transition-colors duration-200" />
        <FaLinkedin className="hover:text-blue-600 transition-colors duration-200" />
        <FaTwitter className="hover:text-sky-500 transition-colors duration-200" />
      </div>
    </nav>
  );
};

 

export default Navbar

 
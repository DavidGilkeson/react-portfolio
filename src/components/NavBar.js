import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import socialIcon from 'react-social-icons/dist/social-icon';

export default function NavBar() {
  return (
    <header className="bg-blue-300">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-6 px-3 mr-4 rounded text-black text-3xl  font-bold signature tracking-widest"
          >
            Educate<span className="text-white">ch</span>
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-blue-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-white font-bold cursive tracking-widest"
          >
            Blog
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-700"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-500 hover:text-white font-bold cursive tracking-widest"
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="text-blue-700"
            className="inline-flex items-center py-3 px-3 my-6 text-green-500 hover:text-white font-bold cursive tracking-widest"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/dgilkeson/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/DavidGilkeson"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            bgColor="black"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

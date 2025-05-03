import React from 'react';
import { NavLink } from 'react-router';
import user from '../../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-4'>
          <div className=""></div>
          <div className="flex gap-x-4 text-accent cursor-pointer text-lg">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/career">Career</NavLink>
          </div>
          <div className="flex gap-x-2 cursor-pointer">
            <img src={user} alt="user" />
            <button className='btn btn-primary text-base-200'>Login</button>
          </div>
        </div>
    );
};

export default Navbar;
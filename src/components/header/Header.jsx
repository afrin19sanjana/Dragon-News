import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center '>
           <img className=' w-[400px] mt-6'
           src={logo} alt="logo" />
           <p className='text-accent py-4'>Journalism Without Fear or Favour</p>
           <p className='font-semibold text-accent text-xl'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;
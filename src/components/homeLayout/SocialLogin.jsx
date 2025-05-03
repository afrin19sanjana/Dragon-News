import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className=" space-y-3"> 
                <button className='btn btn-outline btn-secondary w-full text-lg'> <FaGoogle size={20} /> Login with Google</button>
                <button className='btn btn-outline btn-primary w-full text-lg'><FaGithub size={20} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;
import React from 'react';
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold my-5'>Find Us On </h2>
            <div className="">
                <div className="join join-vertical w-full ">
                    <button className="btn bg-base-100 justify-start  join-item"> <SiFacebook />  Facebook</button>
                    <button className="btn  bg-base-100 justify-start join-item"> <AiFillTwitterCircle /> Twitter</button>
                    <button className="btn bg-base-100 justify-start  join-item"> <FaInstagram /> Instagram</button>
                </div> 
            </div>
        </div>
    );
};

export default FindUs;
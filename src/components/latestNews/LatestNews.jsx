import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='container mx-auto py-4'>
           <div className="flex justify-start items-center  gap-x-2 py-4  bg-base-200 ">
           <p className='bg-secondary text-base-200 px-4 py-2  ml-4 '> Latest </p>
           <Marquee >
           <p className='font-bold text-accent px-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt error corrupti cupiditate reiciendis facere?</p>
           <p className='font-bold text-accent px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt error corrupti cupiditate reiciendis facere?</p>
           <p className='font-bold text-accent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deserunt error corrupti cupiditate reiciendis facere?</p>
           </Marquee>
           </div>
        </div> 
    );
};

export default LatestNews;
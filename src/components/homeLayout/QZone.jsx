import React from 'react';
import swimming from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playGround from '../../assets/playground.png'
const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
         <h2 className='font-bold mb-4'>Q-Zone</h2>
         <div className="flex flex-col justify-center space-y-5">
           
            <img src={swimming} alt="" />
           
            
            <img src={classImg} alt="" />
            
            <img src={playGround} alt="" />
            
         </div>
        </div>
    );
};

export default QZone;
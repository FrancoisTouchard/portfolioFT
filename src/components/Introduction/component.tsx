import React from 'react';

import './Introduction.css'
import profilePic from '../../assets/photoFT.jpg';


export default function Introduction() {
  return (
    <div className="squares-container">
      <div className="square">
        <div className="inner-square">
          <img className='profilepic' src={profilePic} alt={"Photo de moi"} />
        </div>
      </div >
      <div className="square">
        <div className="inner-square">
          <span className='text-job'>Développeur frontend</span>
        </div>
      </div >
    </div>
  );
}
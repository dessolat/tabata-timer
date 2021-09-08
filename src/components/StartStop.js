import React from 'react';
import '../css/StartStop.css';

const StartStop = ({ tabataStarted, startTabata, stopTabata }) => {
  
	const handleClick = () => {
    tabataStarted ? stopTabata() : startTabata();
  };

  return (
    <div className='wrap'>
      <button className='start-btn' onClick={handleClick}>
        {tabataStarted ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default StartStop;

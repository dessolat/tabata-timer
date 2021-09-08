import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import StartStop from './components/StartStop';
import './css/App.css';
import { actionsInit } from './utils';

const App = () => {
  const [settings, setSettings] = useState({
    prepareTime: 2, //10
    workTime: 2, //20
    restTime: 2, //10
    roundsNumber: 2, //8
    cyclesNumber: 2 //1
  });

  const [tabataStarted, setTabataStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [headerText, setHeaderText] = useState('Overall time');

  useEffect(() => {
    const { prepareTime, workTime, restTime, roundsNumber, cyclesNumber } = settings;
    setTimer((prepareTime + (workTime + restTime) * roundsNumber) * cyclesNumber);
  }, [settings]);

  const startTabata = () => {
    setTabataStarted(true);
		actionsInit(settings);
    console.log('started');
  };

  const stopTabata = () => {
    setTabataStarted(false);
    console.log('stopped');
  };

  return (
    <>
      <div className='wrapper'>
        <Header headerText={headerText} />
        <Timer timer={timer} />
        <StartStop
          tabataStarted={tabataStarted}
          startTabata={startTabata}
          stopTabata={stopTabata}
        />
      </div>
    </>
  );
};

export default App;

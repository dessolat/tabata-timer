import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import StartStop from './components/StartStop';
import './css/App.css';

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



  const actionsInit = () => {
    const actions = [];
    const { prepareTime, workTime, restTime, roundsNumber, cyclesNumber } = settings;

    for (let i = 1; i <= cyclesNumber; i++) {
      actions.push({ header: 'Prepare!', time: prepareTime });
      for (let j = 1; j <= roundsNumber; j++) {
        actions.push({ header: 'Work!', time: workTime });
        actions.push({ header: 'Rest time!', time: restTime });
      }
    }

    console.log('Initial actions: ', actions);
  };

  const startTabata = () => {
    setTabataStarted(true);
		actionsInit();
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

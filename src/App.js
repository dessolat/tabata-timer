import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import StartStop from './components/StartStop';
import './css/App.css';
import { actionsInit } from './utils';

const App = () => {
  const [settings, setSettings] = useState({
    prepareTime: 10, //10
    workTime: 20, //20
    restTime: 10, //10
    roundsNumber: 8, //8
    cyclesNumber: 1 //1
  });

  const [tabataStarted, setTabataStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [headerText, setHeaderText] = useState('Overall time');
  const [actions, setActions] = useState([]);

  useEffect(() => {
    const { prepareTime, workTime, restTime, roundsNumber, cyclesNumber } = settings;
    setTimer((prepareTime + (workTime + restTime) * roundsNumber) * cyclesNumber);
  }, [settings]);

  useEffect(() => {
    if (tabataStarted && actions.length) {
      setTimeout(() => {
        if (actions[0].time > 1) {
          setActions([
            { header: actions[0].header, time: actions[0].time - 1 },
            ...actions.slice(1)
          ]);
          setTimer(actions[0].time - 1);
        } else {
          setActions(actions.slice(1));
          if (actions[1]) {
            setTimer(actions[1].time);
            setHeaderText(actions[1].header);
          } else {
            setTimer(0);
            setTabataStarted(false);
          }
        }
      }, 1000);
    }
  }, [actions, tabataStarted]);

  const startTabata = async () => {
    setTabataStarted(true);
    setHeaderText('Prepare!');
    setActions(actionsInit(settings));
    setTimer(settings.prepareTime);
  };

  const stopTabata = () => {
    setTabataStarted(false);
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

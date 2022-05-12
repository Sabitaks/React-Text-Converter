// import { useState, useSyncExternalStore } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App1() {
  const [mode, setMode] = useState('light'); // state variable hai - whether darkmode is enabled or not
  const [alert, setAlert] = useState(null); // state variable hai

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
    
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#042743';
      showAlert("Dark mode has been enable", "success");

    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enable", "success");
    }
  }
  return (
    <>
         
      <Navbar title="TextUtils" aboutText="About" homepage="Home" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      {/* <Navbar title="TextUtils"/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter the text to Analyze below" mode={mode}/>
      </div>
    </>
  );
}
export default App1;
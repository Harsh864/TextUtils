import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import { useState } from 'react';
 

function App() {

  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <div className="container">
          <Forms title="Analysis of the Words: "/>
    </div>
    </>
  );
}

export default App;
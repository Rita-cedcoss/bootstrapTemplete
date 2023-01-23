import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Bootstrap_template/Navbar';
import Middle from './Bootstrap_template/Middle';
import './Bootstrap_template/components.css'
function App() {
  const [display,setDisplay]=useState("block");
  const [padding,setPadding]=useState("dashboard");
  return (
    <>
    <Navbar display={display} padding={padding} setDisplay={setDisplay} setPadding={setPadding}/>
    <Middle display={display} padding={padding}/>
    </>
  );
}

export default App;

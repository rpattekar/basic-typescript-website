import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Person } from "./Person"


function App() {

  return (
    <>
    <Person name={"Ria"} age={19} isStudent={true}/>
    <Person name={"Colin"} age={33} isStudent={false}/>

    </>
  );
  
  
  
}

export default App;

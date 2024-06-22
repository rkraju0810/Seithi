import Navbar from './Components/Navbar'
import './App.css';
import Descriptionpage from './Components/Descriptionpage';
import Home from './Home';
import React, { useContext, useState } from 'react'
import { Route, Routes } from "react-router-dom"
import DataContext from './Contextapi/contextapi';
import Errorcomponent from './Components/Errorcomponent';


function App() {
     const {error} = useContext(DataContext)
  return (

    

    <div className="App">
<Navbar
        />
     
        { error ? <Errorcomponent /> :
        <>
        <Routes>

          <Route path='/' element={<Home
          />}></Route>

          <Route path='/des' element={<Descriptionpage
            
          />}>
          </Route>
        </Routes></>
        
            
        }
        
    </div>
  );
}

export default App;

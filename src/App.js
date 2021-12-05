import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route,} from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>} />
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}


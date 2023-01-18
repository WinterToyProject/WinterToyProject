import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Signin from './pages/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';



function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
  }, []);

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

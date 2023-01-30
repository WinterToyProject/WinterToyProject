import React, { useEffect } from 'react'
import Home from './Home'
import LoginHeader from '../components/LoginHeader'
import '../App.css';
import LoginMap from '../components/LoginMap';

function LoginHome() {


  return (
    <>
    <LoginHeader />
    <LoginMap />
    </>
    
  )
}

export default LoginHome;
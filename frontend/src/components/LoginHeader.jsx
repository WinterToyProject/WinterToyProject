import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/LoginHeader.css';

function LoginHeader() {

  const onLogout = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/user/logout')
    .then((response) => {
      window.location.replace("http://localhost:3000/")
      localStorage.clear();
    })
    .catch(function (error) {
      console.log(error);
      alert('Error: ')
    })
    
  };

  const SessionHandler = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/sessioninfo')
      .then((response) => {
        console.log(response);
        window.location.replace("http://localhost:3000/LoginHome")
      })
    
      .catch(function (err) {
        window.location.replace("http://localhost:3000/Login")
      })
  }

  return (
    <header>
      <div className="inner">
        <Link className='site-name' to='/'>
        <h3 onClick={SessionHandler}> 방방곡곡 </h3>
        </Link>
        <ul class="menu">
          <li>
            <p>{localStorage.getItem('userName')} 님 어서오세요!</p>
            <button className="logout" onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default LoginHeader;
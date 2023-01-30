import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function LoginHeader() {
  const onLogout = () => {
    localStorage.removeItem('id')
    localStorage.removeItem('pw')
    window.location.replace("/")
  };

  const SessionHandler = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8080/session-status', {
      

    })
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
            <p>{localStorage.getItem('id')} 님 어서오세요!</p>
            <button onClick={onLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default LoginHeader;
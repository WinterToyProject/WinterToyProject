import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <header>
      <div className="inner">
        <Link className='site-name' to='/'>
        <h3> 방방곡곡 </h3>
        </Link>
        <ul class="menu">
          <li>
            <Link className='header-nav-item' to='/signin'>
              회원 가입
            </Link>
          </li>
          <li>
            <Link className='header-nav-item' to='/login'>
              로그인
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
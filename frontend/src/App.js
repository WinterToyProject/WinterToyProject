import Header from './components/Header';
import Signin from './pages/Signin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';
import LoginHome from './pages/LoginHome';
import LoginHeader from './components/LoginHeader';


function App() { 

  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/loginheader' element={<LoginHeader/>} />
          <Route path='/loginhome' element={<LoginHome/>} />
        </Routes>
      </Router>
  );
}

export default App;

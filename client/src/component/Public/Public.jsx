import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Public.css';
import PublicNavBar from './PublicNavBar';
import red from '../../images/red.png'
import Login from '../Login/Login';
import Register from '../Register/Register';
import { useSelector } from 'react-redux';
import { selectLoginSinupOption } from '../../features/users/utilSlice';
import SuccessRegister from '../Register/SuccessRegister';
import { selectCurrentToken } from '../../features/auth/authSlice';

function Public() {

  const option = useSelector(selectLoginSinupOption)
  const token = useSelector(selectCurrentToken)


  const content = token ? <Navigate to="/main" /> :
    <div className='publicContainer'>
      <PublicNavBar />
      <div className='publicBody'>
        <span className='imgPresent'>
        </span>
        {
          option === "login" ?
            <Login /> : option === "singup" ?
              <Register /> :
              <SuccessRegister />
        }
      </div>
      <p className='lucasMontero'>Lucas Montero © 2022.
        Todos los derechos reservados.
      </p>
    </div>

  return content
}

export default Public
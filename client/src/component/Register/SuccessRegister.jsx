import React from 'react'
import { useDispatch } from 'react-redux'
import { setLoginSinupRender } from '../../features/users/utilSlice'

const SuccessRegister = () => {
    const dispatch = useDispatch()

    return (
        <div className='SuccessContainer'>
            <p>Registro exitoso!<br />
                Bienvenid@ 😊
            </p>
            <h4 className="goLoginFromSucces" onClick={() => { dispatch(setLoginSinupRender("login")) }}>👉🏻Log In</h4>
            
        </div>
    )
}

export default SuccessRegister
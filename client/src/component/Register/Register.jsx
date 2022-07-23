import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useRegisterMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";
import { setLoginSinupRender } from "../../features/users/utilSlice";
import './Register.css'
const img = "https://img.freepik.com/vector-premium/icono-plano-usuario-anonimo-ilustracion-vector-larga-sombra_520826-1932.jpg"

function Register() {
    const userRef = useRef();
    const errRef = useRef();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate()

    const [register, { isLoading }] = useRegisterMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [email, pwd])

    const handleSummit = async (e) => {
        e.preventDefault()
        try {
            const userData = await register({ email: email, password: pwd, name: userName, img: img }).unwrap()
            // dispatch(setCredentials({ ...userData }))
            setEmail('')
            setPwd('')
            setUserName('')
            if(userData?.msg.includes("exito")){
                dispatch(setLoginSinupRender("successRegister"))
            }
            // navigate('/main')
        } catch (err) {
            if (!err.response) {
                setErrMsg('No server response')
            } else if (err.response.status === 400) {
                setErrMsg('Missing username or password')
            } else if (err.response.status === 401) {
                setErrMsg('Unauthorized')
            } else {
                setErrMsg('Login fail')
            }
            errRef.current?.focus();
        }
    }

    const handleUserNameInput = (e) => setUserName(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)
    const handlePwdInput = (e) => setPwd(e.target.value)
   
    const content = isLoading ? <div></div> : (
        <span className="register">

            <h1>Registrarse</h1>

            <div className="inputContainerReg">
                <span className="material-symbols-outlined">
                    person
                </span>
                <input
                    className="inputReg"
                    type={"text"}
                    id="userName"
                    ref={userRef}
                    value={userName}
                    onChange={handleUserNameInput}
                    required
                    placeholder="Username" />

            </div>

            <form onSubmit={handleSummit}>
                <div className="inputContainerReg">
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <input
                        className="inputReg"
                        type={"text"}
                        id="email"
                        ref={userRef}
                        value={email}
                        onChange={handleEmailInput}
                        autoComplete="off"
                        placeholder="Email" />
                </div>

                <div className="inputContainerReg">
                    <span className="material-symbols-outlined">
                        lock
                    </span>
                    <input
                        className="inputReg"
                        type={"password"}
                        id="password"
                        ref={userRef}
                        value={pwd}
                        onChange={handlePwdInput}
                        required
                        placeholder="Password" />

                </div>


                <button className="singUpBtn">Sing Up</button>

                <h4 className="goLogin" onClick={() => { dispatch(setLoginSinupRender("login")) }}>Log In</h4>

                

            </form>
        </span>

    )

    return content

}

export default Register
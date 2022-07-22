import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { setLoginSinupRender } from "../../features/users/utilSlice";
import './Login.css'


function Login() {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)
    

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const handleSummit = async (e) => {
        e.preventDefault()
        try {
            const userData = await login({ email: user, password: pwd }).unwrap()
            dispatch(setCredentials({ ...userData }))
            setUser('')
            setPwd('')
            navigate('/main')
            console.log(userData)
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

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <div></div> : (
        <span className="login">

            <h1>Bienvenido</h1>

            <form onSubmit={handleSummit}>
                <div className="inputContainer">
                    <span className="material-symbols-outlined">
                        mail
                    </span>
                    <input
                        className="inputLog"
                        type={"text"}
                        id="username"
                        ref={userRef}
                        value={user}
                        onChange={handleUserInput}
                        autoComplete="off"
                        placeholder="Email" />
                </div>

                <div className="inputContainer">
                    <span className="material-symbols-outlined">
                        lock
                    </span>
                    <input
                        className="inputLog"
                        type={"password"}
                        id="password"
                        ref={userRef}
                        value={pwd}
                        onChange={handlePwdInput}
                        required
                        placeholder="Password" />

                </div>


                <button className="loginBtn">Log in</button>

                <h4 className="goRegister" onClick={()=>{dispatch(setLoginSinupRender("singup"))}}>Sing up</h4>

            </form>

        </span>

    )

    return content

}

export default Login
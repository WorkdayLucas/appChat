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
    const navigate = useNavigate()
    const token = useSelector(selectCurrentToken)

    const [errVisibility, setErrVisibility] = useState("hidenErr")

    const [err, setErr] = useState({
        userErr: "Email requerido",
        pwdErr: "Contraseña requerida",
    });

    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus()
    }, [])


    useEffect(() => {

    }, [user, pwd])

    const handleSummit = async (e) => {
        e.preventDefault()
        try {
            if (err.userErr === "" && err.pwdErr === "") {
                const userData = await login({ email: user, password: pwd }).unwrap()
                dispatch(setCredentials({ ...userData }))
                setUser('')
                setPwd('')
                navigate('/main')
            } else {
                setErrVisibility(setErrVisibility("showErr"))
            }

        } catch (error) {
            setErrVisibility(setErrVisibility("showErr"))
            if (error.data.msg === "Usuario no existe.") {
                setErr({ ...err, userErr: "Email no encontrado", })
            } else if (error.data.msg === "Contrasela incorrecta.") {
                setErr({ ...err, pwdErr: "Contraseña incorrecta", })
            } else {
                setErr({ ...err, logErr: "Contraseña incorrecta", })
            }
            errRef.current?.focus();
        }
    }

    const handleUserInput = (e) => {
        if (e.target.value === "") {
            setErr({ ...err, userErr: "Email requerido", })
        } else if (!e.target.value.match(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        )) {
            setErr({ ...err, userErr: "Ingrese email valido", })
        } else {
            setErr({ ...err, userErr: "", })
        }
        setUser(e.target.value.trim())
    }
    const handlePwdInput = (e) => {
        if (e.target.value === "") {
            setErr({ ...err, pwdErr: "Contraseña requerida", })
        } else {
            setErr({ ...err, pwdErr: "", })
        }
        setPwd(e.target.value.trim())
    }

    const content = isLoading ? <div></div> : (
        <span className="login">

            <h1>Bienvenido</h1>

            <form onSubmit={handleSummit}>
                <div className="inputContainer">
                    <div className="icoField">
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
                    <label className={`err ${err.pwdErr.includes("incorrecta") ? "showErr" : errVisibility}`}>{err.userErr}</label>
                </div>


                <div className="inputContainer">
                    <div className="icoField">
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
                            placeholder="Password" />

                    </div>
                    <label className={`err ${errVisibility}`}>{err.pwdErr}</label>
                </div>



                <button className="loginBtn">Log in</button>

                <h4 className="goRegister" onClick={() => { dispatch(setLoginSinupRender("singup")) }}>Sing up</h4>

            </form>
        </span>

    )

    return content

}

export default Login
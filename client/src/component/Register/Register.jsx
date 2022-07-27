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

    const [errVisibility, setErrVisibility] = useState("hidenErr")

    const [err, setErr] = useState({
        userErr: "Email requerido",
        pwdErr: "Contraseña requerida",
        userNameErr: "Username requerido"
    });

    const navigate = useNavigate()

    const [register, { isLoading }] = useRegisterMutation();
    const dispatch = useDispatch();

    useEffect(() => {
        userRef.current.focus()
    }, [])

    const handleSummit = async (e) => {
        e.preventDefault()
        try {
            if (err.userErr === "" &&
                err.pwdErr === "" &&
                err.userNameErr === "") {
                const userData = await register({ email: email, password: pwd, name: userName, img: img }).unwrap()
                // dispatch(setCredentials({ ...userData }))
                setEmail('')
                setPwd('')
                setUserName('')
                if (userData?.msg.includes("exito")) {
                    dispatch(setLoginSinupRender("successRegister"))
                }
                // navigate('/main')
            } else {
                setErrVisibility(setErrVisibility("showErr"))
            }
        } catch (error) {
            setErrVisibility(setErrVisibility("showErr"))
            if (error.data.err.username) {
                setErr({ ...err, userNameErr: "Ya existe este username" })
            }
            if (error.data.err.email) {
                setErr({ ...err, userErr: "Ya existe este email" })
            }
            errRef.current?.focus();
        }
    }

    const handleUserNameInput = (e) => {
        if (e.target.value === "") {
            setErr({ ...err, userNameErr: "Email requerido", })
        } else {
            setErr({ ...err, userNameErr: "", })
        }
        const target = e.target
        setUserName(target.value.length === 1 && target.value[0] === " " ? "" : target.value.length >= 1 && (target.value[0] === " ") ?
            target.value.trim()[0].toUpperCase() + target.value.trim().substring(1).trim() : target.value.length === 1 && target.value[0] !== " " ?
                target.value.toUpperCase() : target.value.length >= 1 && (target.value[0] !== " ") && target.value.substring(target.value.length - 1) !== " " ? target.value.trim()[0].toUpperCase() + target.value.trim().substring(1).trim() : target.value)
    }

    const handleEmailInput = (e) => {
        if (e.target.value === "") {
            setErr({ ...err, userErr: "Email requerido", })
        } else if (!e.target.value.match(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        )) {
            setErr({ ...err, userErr: "Ingrese email valido", })
        } else {
            setErr({ ...err, userErr: "", })
        }
        setEmail(e.target.value.trim())
    }

    const handlePwdInput = (e) => {
        if (e.target.value === "") {
            setErr({ ...err, pwdErr: "Contraseña requerida", })
        } else if (!e.target.value.match(/^([a-zA-Z0-9ñÑ]){6,30}$/)) {
            setErr({ ...err, pwdErr: "6 a 30 caracteres, solo letras o numeros", })
        } else {
            setErr({ ...err, pwdErr: "", })
        }
        setPwd(e.target.value.trim())
    }

    const content = isLoading ? <div></div> : (
        <span className="register">

            <h1 className="formTitle">Registrarse</h1>

            <div className="inputContainerReg">
                <div className="icoField">
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
                        placeholder="Username" />
                </div>
                <label className={`err ${errVisibility}`}>{err.userNameErr}</label>
            </div>

            <form onSubmit={handleSummit}>
                <div className="inputContainerReg">
                    <div className="icoField">
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
                    <label className={`err ${errVisibility}`}>{err.userErr}</label>
                </div>

                <div className="inputContainerReg">
                    <div className="icoField">
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
                            placeholder="Password" />
                    </div>
                    <label className={`err ${errVisibility}`}>{err.pwdErr}</label>
                </div>

                <button className="singUpBtn">Sing Up</button>

                <h4 className="goLogin" onClick={() => { dispatch(setLoginSinupRender("login")) }}>Log In</h4>

            </form>

        </span>

    )

    return content

}

export default Register
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from "../../features/auth/authApiSlice";
import { setCredentials } from "../../features/auth/authSlice";


function Login() {
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation;
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
            const userData = await login({ user, pwd }).unwrap()
            dispatch(setCredentials({ ...userData, user }))
            setUser('')
            setPwd('')
            navigate('/welcome')
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
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUser(e.target.value)
    const handlePwdInput = (e) => setPwd(e.target.value)

    const content = isLoading ? <h1>Loading...</h1> : (
        <section className="login">

            <h1>Login</h1>

            <form onSubmit={handleSummit}>
                <label htmlFor="username">Username:</label>
                <input
                    type={"text"}
                    id="username"
                    ref={userRef}
                    value={user}
                    onChange={handleUserInput}
                    autoComplete="off" />

                <label htmlFor="password">Password:</label>
                <input
                    type={"password"}
                    id="password"
                    ref={userRef}
                    value={pwd}
                    onChange={handlePwdInput}
                    required />

            </form>

        </section>

    )

    return content
}

export default Login
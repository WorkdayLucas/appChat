import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Public from './component/Public'
import Login from './component/Login/Login'
import Welcome from './component/welcome/Welcome'
import RequireAuth from './component/RequireAuth/RequireAuth'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>} >
          {/* public routes */}
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<Welcome />} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;

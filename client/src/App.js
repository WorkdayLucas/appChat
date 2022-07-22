import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Public from './component/Public/Public'
import Main from './component/main/Main'
import RequireAuth from './component/RequireAuth/RequireAuth'
import { useGetUserAuthQuery } from './features/auth/authApiSlice';


function App() {
  useGetUserAuthQuery()
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>} >
          {/* public routes */}
          <Route index element={<Public />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="main" element={<Main />} />
          </Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;

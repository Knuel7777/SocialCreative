import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/react.svg'
import Navbar from './Navbar';
import LogIn from './LogIn';
import Forum from './Forum';
import Profile from './Profile';
import NoPage from "./NoPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path='/Profile' element={<Profile />} />
	        <Route path="/Forum" element={<Forum />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      </>
    
  )
}

export default App


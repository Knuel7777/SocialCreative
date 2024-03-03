import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link, Redirect } from "react-router-dom";
import Navbar from './Navbar';
import Profile from './Profile';
import LogIn from './components/Login/LogIn';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
      </>
    
  )
}

export default App

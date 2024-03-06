import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Profile from './Profile';
import Forum from './Forum';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/react.svg'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App

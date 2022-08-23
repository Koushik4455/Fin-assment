import React from 'react'
import Registration from './Registration'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import "./fin.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Registration' element={<Registration />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

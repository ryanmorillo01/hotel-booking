import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import LoginAuthComponent from './component/auth/LoginAuthComponent.jsx'
import CreateAuthComponent from './component/auth/CreateAuthComponent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Crud from './component/Crud1/Crud.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginAuthComponent />}></Route>
        <Route path='/create' element={<CreateAuthComponent />}></Route>
        <Route path='/crud' element={<Crud />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './credentials/SignUp'
import Login from './credentials/Login'
import Further from './credentials/Further'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>} />
            <Route  path="/signup" element={<SignUp/>} />
            <Route  path="/further" element={<Further/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
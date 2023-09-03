import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './credentials/SignUp'
import Login from './credentials/Login'
import Further from './credentials/Further'
import Profile from './Profile/Pro'
import Bootstrap from './Bootstrap'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route  path="/signup" element={<SignUp/>} />
            <Route  path="/further" element={<Further/>} />
            <Route  path="/profile" element={<Profile/>} />
            <Route  path="/bootstrap" element={<Bootstrap/>} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
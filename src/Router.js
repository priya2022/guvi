import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './credentials/SignUp'
import Login from './credentials/Login'
import Further from './credentials/Further'

const Router = ({dark}) => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login  dark={dark} />} />
            <Route  path="/signup" element={<SignUp dark={dark} />} />
            <Route  path="/further" element={<Further dark={dark} />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
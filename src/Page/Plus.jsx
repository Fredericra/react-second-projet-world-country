import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Menu from './Menu'
import Pays from './Pays'
import Home from './Home'
export default function (props) {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<Pays/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

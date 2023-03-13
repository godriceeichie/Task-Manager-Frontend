import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, MainContent, SignUp } from './pages'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainContent />}/>
        <Route path='/signup' element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App

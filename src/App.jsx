import './App.css'
import { Routes, Route } from 'react-router-dom'
// import About from './pages/About'
import { Home, MainContent, SignUp, About, Contact, Pricing, Login } from './pages'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainContent />}/>
        {/* <Route path='/:id' element={<Home />}/> */}
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='about' element={<About />}/>
      </Route>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default App

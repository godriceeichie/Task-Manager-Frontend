import './App.css'
import { Routes, Route } from 'react-router-dom'
// import About from './pages/About'
import { Home, MainContent, SignUp, About, Contact, Pricing, Login, ForgotPassword, Auth } from './pages'
import Test from './components/container/Test'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainContent />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='about' element={<About />}/>
        
      </Route>
      <Route path='/auth' element={<Auth />}>
        <Route path='signup' element={<SignUp />}/>
        <Route path='login' element={<Login />}/>
        <Route path='forgot-password' element={<ForgotPassword />}/>
      </Route>
      <Route path='/test' element={<Test />}/>
    </Routes>
  )
}

export default App

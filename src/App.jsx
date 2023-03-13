import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Home, MainContent, SignUp, About, Contact, Pricing} from './pages'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<MainContent />}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Route>
    </Routes>
  )
}

export default App

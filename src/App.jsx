import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'
import CareerDetails from './pages/CareerDetails'
import TestPage from './pages/Test'
import Saved from './pages/Saved'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Contact from './pages/Contact'

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/careers/:id" element={<CareerDetails/>} />
      <Route path="/test" element={<TestPage/>} />
      <Route path="/saved" element={<Saved/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default App

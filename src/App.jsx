
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import HideOrShow from './HideOrShow'
function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
       <Route path='/HideOrShow' element = {<HideOrShow/>}/>
    </Routes>
    </>
  )
}

export default App

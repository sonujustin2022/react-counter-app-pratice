
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
    </Routes>
    </>
  )
}

export default App

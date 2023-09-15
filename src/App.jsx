import {} from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import './App.css'

function App() {
 

  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App

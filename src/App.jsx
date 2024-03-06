import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/NavBar/NavBar.jsx'
import Content1 from './components/NavBar/Content1.jsx'

function App() {
  return (
    <div className='min-h-[3000px] min-w-screen bg-cover bg-gymImg bg-no-repeat'>
      <NavBar/> 
      <Content1/>
    </div>
    
   
  )
}

export default App

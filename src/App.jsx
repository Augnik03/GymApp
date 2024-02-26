import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './index.css'
import NavBar from './components/NavBar/NavBar.jsx'


function App() {
  // const [count, setCount] = useState(0)
  const[theme,setTheme]= useState('light')
  return (
    <div className={`container ${theme}`}>
      <NavBar theme={theme} setTheme={setTheme}/> 
    </div>
    
   
  )
}

export default App

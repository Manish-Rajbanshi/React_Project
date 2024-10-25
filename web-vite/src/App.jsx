import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [color, setColor] = useState("blue")
  
  const [mode , setMode]= useState ('dark')
  const [text , setText] =useState ('Set Color')
  const toggleMode= ()=>{
    if(mode == 'light'){
      setMode('dark')
      setText('Set Light')
    }
  else{
      setMode('light')
      setText('Set Dark')
  }
}
  return (
    <>
    <Navbar  title= "this is navbar" mode={mode}text={text} toggleMode={toggleMode}/>

      {/* logo part */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* logo part */}


      <h1>New Vite WebSite</h1>
      <div className="card">
        <button onClick={() => setColor("red")}>
        Click on here {color}
        </button>
      </div>
    </>
  )
}

export default App

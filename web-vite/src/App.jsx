import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
    <Navbar  title= "this is navbar"/>
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

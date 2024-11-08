import { useState } from 'react'
import General from './components/General'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Resume Builder</h1>
      <div className="card">
        <p>
          Fill out the info below to create your own resume
        </p>
      </div>
      <General />
    </>
  )
}

export default App

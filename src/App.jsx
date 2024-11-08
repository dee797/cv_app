import { useState } from 'react'
import General from './components/General'
import './App.css'
import Education from './components/Education'

function App() {

  return (
    <>
      <h1>Resume Builder</h1>
      <p>
        Fill out the info below to create your own resume
      </p>
      <form>
        <General />
        <Education />
      </form>
    </>
  )
}

export default App

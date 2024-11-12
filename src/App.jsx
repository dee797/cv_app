import { useState } from 'react'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/PracticalExperience'
import './App.css'

function App() {
  const [formData, setFormData] = useState();
  const [educationItems, setEducationItems] = useState([{id: 1, key: crypto.randomUUID()}]);
  const [experienceItems, setExperienceItems] = useState([{id: 1, key: crypto.randomUUID()}]);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <h1>Resume Builder</h1>
      <p>
        Fill out the info below to create your own resume
      </p>
      <hr/>
      <form onSubmit={handleSubmit}>
        <General inputChange={handleInputChange}/>
        <hr/>
        <Education inputChange={handleInputChange} educationItems={educationItems} setEducationItems={setEducationItems}/>
        <hr/>
        <Experience inputChange={handleInputChange} experienceItems={experienceItems} setExperienceItems={setExperienceItems}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App

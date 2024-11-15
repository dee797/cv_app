import { StrictMode, useState } from 'react'
import root from './main'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/PracticalExperience'


function Resume({ formData, educationItems, experienceItems }) {
  
  return (
    <main>
      <h2>{formData.fullName}</h2>
      <p>{formData.email} | {formData.phone}</p>
      <hr/>

      <p>EDUCATION</p>
      {educationItems.map(item => {
          const school = `schoolName${item.id}`;
          const title = `studyTitle${item.id}`;
          const date = `graduationDate${item.id}`;
      
          return (
            <section key={item.key}>
              <p><strong>{formData[school]}</strong></p>
              <p><em>{formData[title]}</em></p>
              <p><em>{formData[date]}</em></p>
            </section>
          )
      })}
      <hr/>
      
      <p>EXPERIENCE</p>
      {experienceItems.map(item => {
        const company = `companyName${item.id}`;
        const position = `positionTitle${item.id}`;
        const description = `description${item.id}`;
        const start = `startDate${item.id}`;
        const end = `endDate${item.id}`;
    
        return (
          <section key={item.key}>
            <p><strong>{formData[company]}</strong></p>
            <p><em>{formData[position]}</em></p>
            <p><em>{`${formData[start]} - ${formData[end] ? formData[end] : "Present"}`}</em></p>
            <p>{formData[description]}</p>
          </section>
        )
      })}

      <button 
        type="button" 
        onClick={() => {
          root.render(
            <StrictMode>
              <App editFormData={formData} editEducationItems={educationItems} editExperienceItems={experienceItems}/>
            </StrictMode>
        )}}
        >
          Edit Details
        </button>

    </main>
  )
}


function App({ editFormData="", editEducationItems="", editExperienceItems="" }) {
  const [formData, setFormData] = useState(editFormData ? editFormData : {});
  const [educationItems, setEducationItems] = useState(editEducationItems ? editEducationItems : [{id: 1, key: crypto.randomUUID()}]);
  const [experienceItems, setExperienceItems] = useState(editExperienceItems ? editExperienceItems : [{id: 1, key: crypto.randomUUID()}]);

  const handleInputChange = (name, value) => {
    setFormData(oldFormData => ({ ...oldFormData, [name]: value}));
  }

  const handleSubmit = event => {
    event.preventDefault();
    root.render(
      <StrictMode>
        <Resume formData={formData} educationItems={educationItems} experienceItems={experienceItems}/>
      </StrictMode>
    )
  }

  return (
    <>
      <h1>Resume Builder</h1>
      <p>
        Fill out the info below to create your own resume
      </p>
      <hr/>
      <form onSubmit={handleSubmit}>
        <General inputChange={handleInputChange} formData={formData}/>
        <hr/>
        <Education inputChange={handleInputChange} educationItems={educationItems} setEducationItems={setEducationItems} formData={formData}/>
        <hr/>
        <Experience inputChange={handleInputChange} experienceItems={experienceItems} setExperienceItems={setExperienceItems} formData={formData}/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App

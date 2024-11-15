import { StrictMode, useState } from 'react'
import root from './main'
import General from './components/General'
import Education from './components/Education'
import Experience from './components/PracticalExperience'


function Resume({ formData, educationItems, experienceItems }) {
  
  return (
    <>
    <section className='bg-white text-black flex flex-col mb-10 pb-10'>
      <h2 className='font-bold text-3xl text-center m-10 mb-5 text-wrap'>{formData.fullName}</h2>
      <p className='text-xl font-semibold text-center m-5 mt-0 text-wrap'>{formData.email} | {formData.phone}</p>
      <hr/>

      <p className='font-semibold m-10'>EDUCATION</p>
      {educationItems.map(item => {
          const school = `schoolName${item.id}`;
          const title = `studyTitle${item.id}`;
          const date = `graduationDate${item.id}`;
      
          return (
            <section key={item.key} className='ml-10 mb-10'>
              <p><strong>{formData[school]}</strong></p>
              <p>Major: <em>{formData[title]}</em></p>
              <p>Graduation Date: <em>{formData[date]}</em></p>
            </section>
          )
      })}
      <hr/>
      
      <p className='font-semibold m-10'>EXPERIENCE</p>
      {experienceItems.map(item => {
        const company = `companyName${item.id}`;
        const position = `positionTitle${item.id}`;
        const description = `description${item.id}`;
        const start = `startDate${item.id}`;
        const end = `endDate${item.id}`;
    
        return (
          <section key={item.key} className='ml-10 mb-10'>
            <p><strong>{formData[company]}</strong></p>
            <p>Position: <em>{formData[position]}</em></p>
            <p>Tenure: <em>{`${formData[start]} - ${formData[end] ? formData[end] : "Present"}`}</em></p>
            <p className='ml-5 whitespace-pre-wrap'>{formData[description]}</p>
          </section>
        )
      })}
    </section>

    <button 
    type="button" 
    onClick={() => {
      root.render(
        <StrictMode>
          <App editFormData={formData} editEducationItems={educationItems} editExperienceItems={experienceItems}/>
        </StrictMode>
    )}}
    className='block ml-auto'
    >
      Edit Details
    </button>
    </>
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
      <h1 className='text-center m-10'>Resume Builder</h1>
      <p className='text-center m-10'>
        Fill out the info below to create your own resume
      </p>
      <hr/>
      <form onSubmit={handleSubmit}>
        <General inputChange={handleInputChange} formData={formData}/>
        <hr/>
        <Education inputChange={handleInputChange} educationItems={educationItems} setEducationItems={setEducationItems} formData={formData}/>
        <hr/>
        <Experience inputChange={handleInputChange} experienceItems={experienceItems} setExperienceItems={setExperienceItems} formData={formData}/>
        <button type='submit' className='block mb-7 mt-16 ml-auto'>Submit</button>
      </form>
    </>
  )
}

export default App

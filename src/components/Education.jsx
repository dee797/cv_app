import { useState } from "react";
import CustomInput from "./Input";

function EducationFieldset({num, inputChange, formData}) {
    return (
        <fieldset>
        <legend>Education #{num}</legend>
            <p>
                <label>
                    *School Name:&nbsp;
                    <CustomInput inputChange={inputChange} name={`schoolName${num}`} formData={formData} required={true}/>
                </label>
            </p>

            <p>
                <label>
                    *Title of Study:&nbsp;
                    <CustomInput inputChange={inputChange} name={`studyTitle${num}`} formData={formData} required={true}/>
                </label>
            </p>

            <p>
                <label>
                    *Expected/Actual Graduation Date:&nbsp;
                    <CustomInput type="date" inputChange={inputChange} name={`graduationDate${num}`} formData={formData} required={true}/>
                </label>
            </p>
        </fieldset>
    );
}


function Education({ inputChange, educationItems, setEducationItems, formData}) {

    return (
        <section>
            <h2>Education</h2>
            
            {educationItems.map((item) => {
                return <EducationFieldset key={item.key} num={item.id} inputChange={inputChange} formData={formData}/> 
            })}

            <button type="button" onClick={() => setEducationItems(oldItems => [...oldItems, {id: oldItems.length + 1, key: crypto.randomUUID()}])}>
                Add Education
            </button>

        </section>
    );
  }
  
  export default Education;
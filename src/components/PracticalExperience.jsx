import { useState } from "react";
import CustomInput from "./Input";

function ExperienceFieldset({num, inputChange}) {
    const [isChecked, setChecked] = useState(false);

    return (
        <fieldset>
        <legend>Experience #{num}</legend>
            <p>
                <label>
                    Company Name:&nbsp;
                    <CustomInput inputChange={inputChange} name={`companyName${num}`}/>
                </label>
            </p>

            <p>
                <label>
                    Position Title:&nbsp;
                    <CustomInput inputChange={inputChange} name={`positionTitle${num}`}/>
                </label>
            </p>

            <p>
                <label>
                    Description:&nbsp;
                    <CustomInput inputChange={inputChange} name={`description${num}`}/>
                </label>
            </p>

            <p>
                <label>
                    Start Date:&nbsp;
                    <CustomInput type="date" inputChange={inputChange} name={`startDate${num}`}/>
                </label>
            </p>

            <p>
                <label>
                    End Date:&nbsp;
                    <CustomInput type="date" disabled={isChecked} inputChange={inputChange} name={`endDate${num}`}/>
                </label>
            </p>

            <p>
                <label>
                    I currently work here&nbsp;
                    <input type="checkbox" onClick={() => setChecked(isChecked => isChecked ? false : true)} />
                </label>
            </p>

        </fieldset>
    );
}


function Experience({ inputChange, experienceItems, setExperienceItems }) {

    return (
        <section>
            <h2>Practical Experience</h2>
            
            {experienceItems.map((item) => {
                return <ExperienceFieldset key={item.key} num={item.id} inputChange={inputChange} /> 
            })}

            <button type="button" onClick={() => setExperienceItems(oldItems => [...oldItems, {id: oldItems.length + 1, key: crypto.randomUUID()}])}>
                Add Experience
            </button>

        </section>
    );
  }
  
  export default Experience;
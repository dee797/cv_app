import { useState } from "react";
import CustomInput from "./Input";

function EducationFieldset({num}) {
    return (
        <fieldset>
        <legend>Education #{num}</legend>
            <p>
                <label>
                    School Name:&nbsp;
                    <CustomInput />
                </label>
            </p>

            <p>
                <label>
                    Title of Study:&nbsp;
                    <CustomInput />
                </label>
            </p>

            <p>
                <label>
                    Date of Study:&nbsp;
                    <CustomInput />
                </label>
            </p>
        </fieldset>
    );
}


function Education() {
    const [items, setItems] = useState([{id: 1, key: crypto.randomUUID()}]);

    return (
        <section>
            <h2>Education</h2>
            
            {items.map((item) => {
                return <EducationFieldset key={item.key} num={item.id} /> 
            })}

            <button type="button" onClick={() => setItems(oldItems => [...oldItems, {id: oldItems.length + 1, key: crypto.randomUUID()}])}>
                Add Education
            </button>

        </section>
    );
  }
  
  export default Education;